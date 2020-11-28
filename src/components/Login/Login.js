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
        </div>
    )
}

export default Login
