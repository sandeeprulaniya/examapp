import React, { use } from "react";
import { MdCheckCircle, MdCancel } from "react-icons/md";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import allQuestions from "../allQuestions";
import { useNavigate } from "react-router-dom";

function ReviewPage() {

    const navigate = useNavigate();
    const location = useLocation();
    const ans = location.state.answers;

   
    
    const [index,setIndex] = useState(0);
    
    

    function handleClick() {

         if((allQuestions.length-1)===index){
            navigate("/thankyou");
            return
        }

        setIndex((prev)=>{
            return prev+1;
        })
        
        console.log("length" + ans.length + "index" + index);

       
        
    }
    return (


        <div className="ans-review">
            <div className="review-wrapper">
                <h1>Review Your Answers</h1>
                <div className="review-question">
                
                
                    <h2>{allQuestions[index].question}</h2>
                    <h3 className="option">A. {allQuestions[index].options[0]}  {allQuestions[index].options[allQuestions[index].correctIndex]===allQuestions[index].options[0] ? <MdCheckCircle color="green" size={30}/> : <MdCancel color="red" size={30}/>} </h3> 
                    <h3 className="option">B. {allQuestions[index].options[1]}  {allQuestions[index].options[allQuestions[index].correctIndex]===allQuestions[index].options[1] ? <MdCheckCircle color="green" size={30}/> : <MdCancel color="red" size={30}/>} </h3>
                    <h3 className="option">C. {allQuestions[index].options[2]}  {allQuestions[index].options[allQuestions[index].correctIndex]===allQuestions[index].options[2] ? <MdCheckCircle color="green" size={30}/> : <MdCancel color="red" size={30}/>}</h3>
                    <h3 className="option">D. {allQuestions[index].options[3]}  {allQuestions[index].options[allQuestions[index].correctIndex]===allQuestions[index].options[3] ? <MdCheckCircle color="green" size={30}/> : <MdCancel color="red" size={30}/>}</h3>
                    <button className="start-btn" onClick={handleClick}>Next</button>
                    <h3>Your Answer: {ans[index]} </h3>

                </div>
            </div>
        </div>


    );

}

export default ReviewPage;