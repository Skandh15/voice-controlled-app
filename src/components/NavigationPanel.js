import React from 'react';
import { Link } from 'react-router-dom';

const NavigationPanel = () => {
  return (
    <div>
      <nav>
        <ul>
          <li><Link to="/page1">Page 1</Link></li>
          <li><Link to="/page2">Page 2</Link></li>
          <li><Link to="/page3">Page 3</Link></li>
          <li><Link to="/page4">Page 4</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default NavigationPanel;
