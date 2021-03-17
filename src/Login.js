import React, {useState} from 'react';
import "./Login.css";
import { Link, useHistory} from 'react-router-dom';
import {auth} from './firebase';

function Login() {
    const history = useHistory();
    const [email, setEmail] =  useState("");
    const [password, setPassword] =  useState("");

    const login = e => {
        e.preventDefault();

        auth
        .signInWithEmailAndPassword(email, password)
        .then((auth) => {
            //logged in, redirect to homepage
            history.push("/");
        })
        .catch((e) => alert(e.message));
    };

    const register = e => {
        e.preventDefault();

        auth
        .createUserWithEmailAndPassword(email, password)
        .then((auth) => {
            //created a user and logged in, redirect to homepage
            history.push("/");
        })
        .catch((e) => alert(e.message));
    };

    return (
        <div className="login">
            <Link to="login">
                <img className="login__logo" src="http://pngimg.com/uploads/amazon/small/amazon_PNG24.png" alt="logo" />
            </Link>

            <div className="login__container">
                <h1>Sign in</h1>
                <form>
                    <h5>Email</h5>
                    <input 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} 
                    type="email" />
                    <h5>Password</h5>
                    <input 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    type="password" />
                    <button onClick={login} type="submit" className="login__signInButton">Sign In</button>
                    <p>
                        By signing in you agree to Amazon's Conditions of Use & Sale. Please see our Privacy Notice, our Cookies and our Interest-Based Ads Notice.
                    </p>
                    <button onClick={register} type="submit" className="login__signRegisterButton">Create your Amazon account</button>
                </form>
            </div>
        </div>
    );
}

export default Login
