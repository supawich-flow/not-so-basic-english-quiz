import React, { useEffect, useState } from "react";
import StartScreen from "./components/StartScreen.jsx";
import QuestionScreen from "./components/QuestionScreen.jsx";
import ScoreScreen from "./components/ScoreScreen.jsx";
import "./style.css";

const App = () => {
  // ใส่สถานะไว้เผื่อใช้ต่อในอนาคต (ตอนนี้ยังไม่ใช้ logic)
  const [started, setStarted] = useState(false);
  const [showScore, setShowScore] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [score, setScore] = useState(0)

  useEffect(() => {
    fetch('/questions.json')
    .then(res => res.json())
    .then(data => setQuestions(data))
    .catch(err => console.error('Error loading questions',err))
  },[])

  return (
    <div className="container">
      {!started && !showScore && <StartScreen
        started={started} setStarted={setStarted}/>}
      {started && !showScore && <QuestionScreen
       questions={questions}
       setQuestions={setQuestions}
       score={score}
       setScore={setScore}
       setShowScore={setShowScore}/>}
      {showScore && <ScoreScreen
      score={score}
      setScore={setScore}
      questions={questions}
       />}
    </div>
  );
};

export default App;