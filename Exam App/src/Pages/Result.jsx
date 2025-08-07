import React from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import allQuestions from "../allQuestions";
function Result(){

  const navigate = useNavigate();

  const location = useLocation();
  const { answers } = location.state;
  

   let score = 0;

    for (let i = 0; i < allQuestions.length; i++) {
        const correctAnswer = allQuestions[i].options[allQuestions[i].correctIndex];
        if (answers[i] === correctAnswer) {
            score++;
        }
    }


  function handleClick(){
    navigate("/review",{state:{answers:answers}})
  }
    return <div className="result">
        <h1>Your Score is : {score}</h1>
        <button className="start-btn" onClick={handleClick}>Review Answers</button>
    </div>
}

export default Result;