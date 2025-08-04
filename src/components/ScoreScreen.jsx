import React from "react";
import { useState, useEffect } from "react";

const ScoreScreen = ({score,setScore,questions}) => {
const [level,setLevel] = useState('')
const [levelDescription,setLevelDescription] = useState('')


useEffect(() => {
  if (score >= 28) {
  setLevel('God of Legend')
  setLevelDescription('"Freakin’ unstoppable! You’re basically a quiz god. Bow down, mere mortals."')
} else if (score >= 21) {
  setLevel('Fake Pro)')
  setLevelDescription('"Almost a pro, but still fakin’ it. Stop bluffin’ and level up for real!"')
} else if (score >= 13) {
  setLevel('Got Some Sauce')
  setLevelDescription('"You got some skills, but don’t get cocky. Keep grinding, rookie!"')
} else if (score >= 6) {
  setLevel('Confused Final Boss')
  setLevelDescription('"You’re the final boss of confusion. Go study or get wrecked next time!"')
} else{
  setLevel('WHAT THE FUCK?')
  setLevelDescription('"What the fuck? Did you even try or just nap through this shit?"')
}
},[score])

  return (
    <div className="show-score">
      <div className="End">
        <div className="logo">
          <h1>👺</h1>
        </div>
        <div className="end-text">
          <p>!Quiz Ended!</p>
        </div>
        <div className="score" id="scoreText">
          <p>Score: {score}/{questions.length}</p>
        </div>
        <div className="level" id="levelText">
          <p>Your level: <strong>{level}</strong></p>
        </div>
        <div className="level-desc">
          <p style={{fontWeight:300}}><i>{levelDescription}</i></p>
        </div>
      </div>
    </div>
  );
};

export default ScoreScreen;