import React, { useState } from 'react';

const VoiceControl = () => {
  const [transcript, setTranscript] = useState('');
  const [listening, setListening] = useState(false);

  const recognition = new window.webkitSpeechRecognition(); // Create a SpeechRecognition object
  recognition.continuous = true; // Continuous recognition
  recognition.lang = 'en-US'; // Set language

  recognition.onresult = (event) => {
    const currentTranscript = event.results[event.results.length - 1][0].transcript;
    setTranscript(currentTranscript);
    handleVoiceCommand(currentTranscript); // Call a function to handle voice commands
  };

  const startRecognition = () => {
    recognition.start(); // Start speech recognition
    setListening(true);
  };

  const stopRecognition = () => {
    recognition.stop(); // Stop speech recognition
    setListening(false);
  };

  const resetTranscript = () => {
    setTranscript('');
  };

  const handleVoiceCommand = (command) => {
    // Implement logic to handle the transcript or trigger navigation based on the voice commands.
    if (command.includes('page 1')) {
      window.location.href = '/page1';
    } else if (command.includes('page 2')) {
      window.location.href = '/page2';
    } else if (command.includes('page 3')) {
      window.location.href = '/page3';
    } else if (command.includes('page 4')) {
      window.location.href = '/page4';
    }
  };

  return (
    <div>
      <div>
        {listening ? (
          <button onClick={stopRecognition}>Stop Voice Recognition</button>
        ) : (
          <button onClick={startRecognition}>Start Voice Recognition</button>
        )}
        <button onClick={resetTranscript}>Reset Transcript</button>
      </div>
      <p>Transcript: {transcript}</p>
    </div>
  );
};

export default VoiceControl;
