import React, { useEffect } from "react";
import allQuestions from "../allQuestions";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Timer from "../components/Timer"
import QuesIndicator from "../components/QuesIndicator";
import UserIdentity from "../components/userIdentity";


function Question() {

    const navigate = useNavigate();
    const [currentQ, setCurrentQ] = useState(1);
    const [score, setScore] = useState(0);
    const [input, setInput] = useState("");
    const [ques, setQues] = useState({
        q: "",
        oa: "",
        ob: "",
        oc: "",
        od: ""
    });

    const [questionStatus, setQuestionStatus] = useState(Array(allQuestions.length).fill("notvisited"));




    // const [answer, setAnswer] = useState([]);
    const [answer, setAnswer] = useState(Array(allQuestions.length).fill(""));


    useEffect(() => {
        setQues({
            q: allQuestions[0].question,
            oa: allQuestions[0].options[0],
            ob: allQuestions[0].options[1],
            oc: allQuestions[0].options[2],
            od: allQuestions[0].options[3]
        })
    }, [])



    function handleClick() {



        const index = allQuestions[currentQ - 1].correctIndex;
        let latestScore = score;

        setQuestionStatus((prev) => {
            const updatedStatus = [...prev];

            if (updatedStatus[currentQ - 1] === "notvisited") {
                updatedStatus[currentQ - 1] = "visited"
            }

            return updatedStatus
        })



        if (input === allQuestions[currentQ - 1].options[index]) {
            latestScore = latestScore + 1;
            setScore(latestScore);
        }


        const updatedAnswers = [...answer];
        updatedAnswers[currentQ - 1] = input;
        setAnswer(updatedAnswers);


        if (input === "" && questionStatus[currentQ - 1] === "answered") {
            setQuestionStatus((prev) => {
                const updatedStatus = [...prev];
                updatedStatus[currentQ - 1] = "visited";
                return updatedStatus;
            })
        }

        if (input !== "") {
            setQuestionStatus((prev) => {
                const updatedStatus = [...prev];
                updatedStatus[currentQ - 1] = "answered";
                return updatedStatus;
            })
        }



        if (currentQ >= allQuestions.length) {

            localStorage.setItem("isQuizCompleted", true);

            navigate("/result", {
                state: { totalScore: latestScore, answers: updatedAnswers }
            });
            return;
        }



        setQues({
            q: allQuestions[currentQ].question,
            oa: allQuestions[currentQ].options[0],
            ob: allQuestions[currentQ].options[1],
            oc: allQuestions[currentQ].options[2],
            od: allQuestions[currentQ].options[3]
        });


        setCurrentQ((prev) => {
            return prev + 1;
        })



        setInput(answer[currentQ]);



    }

    useEffect(() => {

    }, [score, answer])


    function handleInput(event) {
        const userInput = event.target.value;
        setInput(userInput);

    }

    function handlePrev() {


        if (currentQ > 1) {
            let index = currentQ - 2;

            setQues({
                q: allQuestions[index].question,
                oa: allQuestions[index].options[0],
                ob: allQuestions[index].options[1],
                oc: allQuestions[index].options[2],
                od: allQuestions[index].options[3]
            });

            setCurrentQ((prev) => {
                return prev - 1;
            });

            setInput(answer[currentQ - 2]);

        }

    }




    function indicatorColorChanger(index) {

        if (questionStatus[index] === "answered") {
            return "green"
        } else if (questionStatus[index] === "visited") {
            return "red"
        } else if (questionStatus[index] === "notvisited") {
            return "gray"
        } else if (questionStatus[index] === "markedforreview") {
            return "purple"
        }
    }


    function handleMarkForReview() {

        const updatedAnswers = [...answer];
        updatedAnswers[currentQ - 1] = input;
        setAnswer(updatedAnswers);

        setQuestionStatus((prev) => {
            const updatedStatus = [...prev];
            updatedStatus[currentQ - 1] = "markedforreview";
            return updatedStatus;
        });

        if (currentQ >= allQuestions.length) {
            localStorage.setItem("isQuizCompleted", true);
            navigate("/result", {
                state: { totalScore: score, answers: updatedAnswers }
            });
            return;
        }

        setQues({
            q: allQuestions[currentQ].question,
            oa: allQuestions[currentQ].options[0],
            ob: allQuestions[currentQ].options[1],
            oc: allQuestions[currentQ].options[2],
            od: allQuestions[currentQ].options[3]
        });

        setCurrentQ((prev) => prev + 1);
        setInput(answer[currentQ]);
    }


    function handleClearResponse() {
        setInput("")
        setAnswer((prev) => {
            const updatedans = [...prev];
            updatedans[currentQ - 1] = "";
            return updatedans
        })
    }


    return (


        <div>
            <div className="quiz-header">
                <h2>Mock Exam - Practice Test</h2>
            </div>

        

        <div className="quiz-container">

            


            <UserIdentity name="Sandeep Rulaniya" photoUrl="https://pxraja.com/wp-content/uploads/2024/07/no-dp_16.webp" />



            <div className="timer-wrapper">
                <Timer />
            </div>

            <div className="allQuestionsIndicators">

                {allQuestions.map((q, index) => {

                    return (<QuesIndicator key={index} number={index + 1} color={indicatorColorChanger(index)} />)
                })}



            </div>


            <div className="question-wrapper">

                <h1> Q{currentQ}.{ques.q}</h1>

                <label className="quiz-option">
                    A. <input checked={input === ques.oa} onChange={handleInput} type="radio" name="question1" value={ques.oa} />
                    {ques.oa}
                </label>

                <label className="quiz-option">
                    B. <input checked={input === ques.ob} onChange={handleInput} type="radio" name="question1" value={ques.ob} />
                    {ques.ob}
                </label>

                <label className="quiz-option">
                    C. <input checked={input === ques.oc} onChange={handleInput} type="radio" name="question1" value={ques.oc} />
                    {ques.oc}
                </label>

                <label className="quiz-option">
                    D. <input checked={input === ques.od} onChange={handleInput} type="radio" name="question1" value={ques.od} />
                    {ques.od}
                </label>

            </div>


            <div className="quiz-buttons-wrapper">
                <button type="submit" className="quiz-button" onClick={handlePrev}>
                    Prev
                </button>
                <button type="submit" className="quiz-button" onClick={handleClick}>
                    Save & Next
                </button>
                <button type="submit" className="quiz-button" onClick={handleMarkForReview}>
                    Mark For Review & Next
                </button>
                <button type="submit" className="quiz-button" onClick={handleClearResponse}>
                    Clear Response
                </button>
            </div>


            <div className="indications">
                <div className="indicator-item"><QuesIndicator color="gray" /> Not Visited</div>
                <div className="indicator-item"><QuesIndicator color="green" /> Answered</div>
                <div className="indicator-item"><QuesIndicator color="purple" /> Review</div>
                <div className="indicator-item"><QuesIndicator color="red" /> Not Answered</div>
            </div>


        </div>

        </div>
    );
}

export default Question;
