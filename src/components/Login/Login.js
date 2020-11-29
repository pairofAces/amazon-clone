import React, { useState } from 'react'
import './Login.css';
import logo from './Emporium-white.png';
import { Link } from 'react-router-dom';
import { auth } from '../Firebase/firebase';


function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    //create the sign-in function
    const signIn = (e) => {
        e.preventDefault();

        //include firebase authentication code here
    }

    //create the register function
    const register = (e) => {
        e.preventDefault();

        auth.createUserWithEmailAndPassword(email, password)
        .then((auth) => {
            // test if a user is successfully created
            console.log(auth);
        })
        .catch(error => alert(error.message))
        //include firebase registration code here
    }

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
                    <input type="text" value={email} onChange={e => setEmail(e.target.value)}/>

                    <h5>Password</h5>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>

                    <button type="submit" onClick={signIn} className="login_signInButton">Sign In</button>
                </form>

                <p>
                    By signing-in you agree to Emporium's Conditions of 
                    Use & Sale. Please see our Privacy Notice, our Cookies
                    Notice and our Interest-Based Ads.
                </p>

                <button onClick={register} className="login_registerButton">Create your Emporium Account</button>
            </div>
        </div>
    )
}

export default Login
