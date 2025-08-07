import React from "react";
import { useNavigate } from "react-router-dom";
function Home() {

    const navigate = useNavigate();

    function handleClick() {
        localStorage.setItem("isQuizCompleted",false);
        navigate("/quiz");
    }

    return <div className="welcome-screen">
    <h1>Welcome to the Quiz App</h1>
    <button className="start-btn" onClick={handleClick}>Start Quiz</button>
    </div>
}

export default Home;