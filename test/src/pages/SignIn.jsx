import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../config/firebase'

export default function SignIn() {

    const navigate = useNavigate();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [errorMessage, setErrorMessage] = useState();

    const onSubmitSignIn = async (e) => {
        e.preventDefault();
        await signInWithEmailAndPassword(auth,email,password)
        .then((userCrd)=>{
            const user = userCrd.user;
            console.log(user);
            navigate("/home");
        })
        .catch((err)=>{
            console.log(err.code);
            switch (err.code) {
                case "auth/missing-password":
                    setErrorMessage("Password is missing.")
                    break;
                case "auth/invalid-email":
                    setErrorMessage("Invalid email.");
                    break;
                default:
                    setErrorMessage("Invalid Email or Password.")
                    break;
            }
        })
    }

    return(
        <div className="loginContainer">
            <h1>Log In</h1>
            <input type="email" name="email" id="email" placeholder='Email' required onChange={e => setEmail(e.target.value)}/>
            <input type="password" name="password" id="password" placeholder='Password' required onChange={e => setPassword(e.target.value)}/>
            <button onClick={onSubmitSignIn}>Sign In</button>
            {errorMessage ? 
                <p className="errorMessage">{errorMessage}</p>
                : 
                ""
            }
            <p>Already have an account? </p>
            <NavLink to='/signup'>Sign Up</NavLink>
        </div>
    )

}                     