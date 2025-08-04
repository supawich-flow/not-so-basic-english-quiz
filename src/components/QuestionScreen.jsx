import { useEffect } from "react";
import { useState,useRef } from "react";

const QuestionScreen = ({questions,setQuestions,score,setScore,setShowScore}) => {
  const [currentIndex,setCurrentIndex] = useState(0)

  const [answerState,setAnswerState] = useState(() => {

    const savedAnswerState = localStorage.getItem('answerState')
    if (savedAnswerState) {
      try {
        return JSON.parse(savedAnswerState)
      } catch {
        return new Array(questions.length).fill(null);
      }
    }
    return new Array(questions.length).fill(null);
  });

  useEffect(() => {
    const savedScore = localStorage.getItem('score')
    if (savedScore) {
      setScore(Number(savedScore))
    }
  },[setScore])

  useEffect(() => {
    localStorage.setItem('answerState', JSON.stringify(answerState))
  },[answerState])

  useEffect(() => {
    localStorage.setItem('score', score.toString)
  },[score])

  const currentQuestionId = questions[currentIndex].id;
  const currentQuestion = questions[currentIndex].question;
  const currentAnswers = questions[currentIndex].answers;
  const currentCorrect = questions[currentIndex].correct;

  const selectedIndex = answerState[currentIndex]

  function selectAnswer(index) {
    if(selectedIndex === index) {
      const updated = [...answerState]
      updated[currentIndex] = null
      setAnswerState(updated)

      if (currentAnswers[index] === currentCorrect) {
        setScore(prev => prev - 1)
      }
      return;
    } 

    const updated = [...answerState]
    const prevAnswerIndex = updated[currentIndex]

    if  (prevAnswerIndex !== null && currentAnswers[prevAnswerIndex] === currentCorrect) {
      setScore(prev => prev - 1)
    }

    updated[currentIndex] = index
    setAnswerState(updated)

    if (currentAnswers[index] === currentCorrect) {
      setScore(prev => prev + 1)
    }
}

function nextButton() {
  if (answerState[currentIndex] === null) {
    alert("Please select an answer before moving to the next question.")
  } else {
    setCurrentIndex(prev => prev + 1)
  }
}

  console.log(score)
  return (
    <div className="wrapper">
      <div className="title-and-logo" >
        <div className="logo">
          <h1>👺</h1>
        </div>
        <div className="title">
          <p>Basic English Quiz By Bom</p>
        </div>
        <div className="title-desc">
          <p>created by React</p>
        </div>
      </div>

      <div className="question-section">
        <div className="question" id="questionText">
          {currentQuestionId}. {currentQuestion}
        </div>
        <div className="answer-container" id="answerBox">
          {currentAnswers.map((ans,index) =>(
            <button key={index}
            disabled={selectedIndex !== null && selectedIndex !== index}
            style={{ 
              backgroundColor:selectedIndex === index ? '#0084ff' : 'white',
              color:selectedIndex === index ? 'white' : 'black'
            }}
            onClick={()=>selectAnswer(index)}>{ans}</button>
          ))}
        </div>
      </div>

      <div className="next-button">
        <button id="backButton" className="" onClick={() => setCurrentIndex(prev => prev - 1)}>Back</button>
        <p>{currentQuestionId}/{questions.length}</p>
        <button id="nextButton" className={`${currentQuestionId + 1 > questions.length ? 'hidden' : ''}`} onClick={nextButton}>Next</button>
        <button id="viewScoreButton" className={`${currentQuestionId + 1 > questions.length ? '' : 'hidden'}`} onClick={() => setShowScore(true)}>Complete & View Score</button>
      </div>
    </div>
  );
};

export default QuestionScreen;