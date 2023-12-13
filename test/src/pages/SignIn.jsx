import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../config/firebase'

export default function SignIn() {

    const navigate = useNavigate();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();


    const onSubmitSignIn = async (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth,email,password)
        .then((userCrd)=>{
            const user = userCrd.user;
            console.log(user);
            navigate("/home");
        })
        .catch((err)=>{
            console.error(err);
        })
    }

    return(
        <div className="loginContainer">
            <h1>Log In</h1>
            <input type="email" name="email" id="email" placeholder='Email' required onChange={e => setEmail(e.target.value)}/>
            <input type="password" name="password" id="password" placeholder='Password' required onChange={e => setPassword(e.target.value)}/>
            <button onClick={onSubmitSignIn}>Sign In</button>
            <p>Already have an account? </p>
            <NavLink to='/signup'>Sign Up</NavLink>
        </div>
    )

}                     