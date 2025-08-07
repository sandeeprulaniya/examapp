import React from "react";

function ThankYouPage() {


    localStorage.removeItem("isQuizCompleted")



    return <h1 className="thank">Thank you for attempting the quiz</h1>
}

export default ThankYouPage;


