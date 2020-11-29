import React from 'react'
import './Login.css';
import logo from './Emporium-white.png';
import { Link } from 'react-router-dom';

function Login() {
    return (
        <div className="login">
            <Link to="/">
            
                <img 
                    className="login_logo" 
                    src={logo} 
                    alt="Amazon Clone Logo"
                />
            </Link>

            <div className="login_container" >
                <h1>Sign-In</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type="text"/>

                    <h5>Password</h5>
                    <input type="password"/>

                    <button className="login_signInButton">Sign In</button>
                </form>

                <p>
                    By signing-in you agree to Emporium's Conditions of 
                    Use & Sale. Please see our Privacy Notice, our Cookies
                    Notice and our Interest-Based Ads.
                </p>

                <button className="login_registerButton">Create your Emporium Account</button>
            </div>
        </div>
    )
}

export default Login
