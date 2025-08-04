import React from "react";

const StartScreen = ({started,setStarted}) => {
  return (
    <div className="start-quiz">
      <div className="start">
        <div className="logo">
          <h1>👺</h1>
        </div>
        <div className="start-text">
          <p>Basic English Quiz By Bom</p>
        </div>
        <div className="start-desc">
          <p>created by React</p>
        </div>
        <div className="start-desc1">
          <p>(30 Questions with 4 choices)</p>
        </div>
        <div className="button">
          <button onClick={() => setStarted(true)}>Start</button>
        </div>
      </div>
    </div>
  );
};

export default StartScreen;