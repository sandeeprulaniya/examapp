import React from 'react';
import Question from './Pages/Question';
import {BrowserRouter,Route,Routes} from "react-router-dom";
import Result from './Pages/Result';
import Home from './Pages/Home';
import ReviewPage from './Pages/ReviewPage';
import ThankYouPage from './Pages/ThankYouPage';
import SignUpPage from './Pages/SignUpPage';
import LoginPage from './Pages/LoginPage';
import { Navigate } from "react-router-dom";


function ProtectedRoute({element}){

    let isQuizCompleted = localStorage.getItem("isQuizCompleted");

    if(isQuizCompleted==="true"){
        return element
    } else{
        return <Navigate to="/"  />
    }

}

function App(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/quiz' element={<Question />} />
                <Route path='/result' element={<Result />} />
                <Route path='/review' element={<ReviewPage />} />
                <Route path='/thankyou' element= {<ProtectedRoute element={<ThankYouPage />} />} />
                <Route path='/signup' element={<SignUpPage />}/>
                <Route path='/login' element={<LoginPage />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App;