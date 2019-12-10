// import ChildComponent from "components/child";
// import ChildComponent from "components/funcChild";
import ChildComponent from "components/emotionChild";
/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import React from "react";
// import classnames from "classnames";
import logo from "./logo.svg";

import "./App.css";

// Test css
// import './pure.css';

// Test scss
import "./app.scss";

// Test functional css
// import "./functional.scss";

// Test Emotion
const secondChildStyle = css`
  width: 350px;
`;

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <span>
          <img src={logo} className="App-logo" alt="logo" />
          <h3>CSS Test</h3>
        </span>
      </header>
      <div className="child-container">
        {/* <div
        className={classnames(
          "flex-column justify-content-center align-content-center"
        )}
      > */}
        <ChildComponent title="Component the first" />
        <ChildComponent title="Component the second" style={secondChildStyle} />
      </div>
    </div>
  );
};

export default App;
