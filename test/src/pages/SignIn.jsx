import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";
import {
    CheckIfUserIsAuthorized,
    HandleSignErrors,
} from "../components/functionality";

export default function SignIn() {
    const navigate = useNavigate();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [errorMessage, setErrorMessage] = useState();

    CheckIfUserIsAuthorized();

    const onSubmitSignIn = async (e) => {
        e.preventDefault();
        await signInWithEmailAndPassword(auth, email, password)
            .then(() => {
                navigate("/home");
            })
            .catch((err) => {
                HandleSignErrors(err.code, setErrorMessage);
            });
    };

    return (
        <div className="loginContainer">
            <h1>Log In</h1>
            <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                required
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                required
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={onSubmitSignIn}>Sign In</button>
            {errorMessage ? <p className="errorMessage">{errorMessage}</p> : ""}
            <p>Already have an account? </p>
            <NavLink to="/signup">Sign Up</NavLink>
        </div>
    );
}
