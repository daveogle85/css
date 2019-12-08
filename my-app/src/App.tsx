import ChildComponent from 'components/child';
import React from 'react';
import logo from './logo.svg';

import './App.css';
import './pure.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <span><img src={logo} className="App-logo" alt="logo" />
        <h3>CSS Test</h3></span>
      </header>
      <div className="child-container">
      <ChildComponent title="Component the first"/>
      <ChildComponent title="Component the second"/>
      </div>
    </div>
  );
}

export default App;
