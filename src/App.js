import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavigationPanel from './components/NavigationPanel';
import VoiceControl from './components/VoiceControl';
import Page from './components/Page';

const App = () => {
  return (
    <Router>
      <div>
        <VoiceControl />
        <NavigationPanel />
        <Routes>
          <Route path="/page1" element={<Page page={1} />} />
          <Route path="/page2" element={<Page page={2} />} />
          <Route path="/page3" element={<Page page={3} />} />
          <Route path="/page4" element={<Page page={4} />} />
          {/* Add a default route to handle unknown paths */}
          <Route path="*" element={<div>404 Page Not Found</div>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
