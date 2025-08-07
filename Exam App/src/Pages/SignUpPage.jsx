import React from "react";
import { Link } from "react-router-dom";

function SignUpPage() {
    return (
        <div className="signup-container">
            <h2>Create an Account</h2>
            <form className="signup-form">
                <input type="text" placeholder="Full Name" required />
                <input type="email" placeholder="Email Address" required />
                <input type="password" placeholder="Password" required />
                <input type="password" placeholder="Confirm Password" required />
                <button type="submit">Sign Up</button>
            </form>
            <p className="login-link">
                Already have an account? <Link to="/login">Login</Link>
            </p>
        </div>
    );
}

export default SignUpPage;
