import React from "react";
import { Link } from "react-router-dom";

function LoginPage() {
    return (
        <div className="login-container">
            <h2>Login</h2>
            <form className="login-form">
                <input type="email" placeholder="Email Address" required />
                <input type="password" placeholder="Password" required />
                <button type="submit">Login</button>
            </form>
            <p className="signup-link">
                Don't have an account? <Link to="/signup">Sign Up</Link>
            </p>
        </div>
    );
}

export default LoginPage;
