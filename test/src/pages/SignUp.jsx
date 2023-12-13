import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../config/firebase'
import {HandleSignErrors} from '../components/functionality';


export default function SignUp() {

    const navigate = useNavigate();

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [errorMessage, setErrorMessage] = useState();
    

    const onSubmitSignUp =  async (e) => {
        e.preventDefault();
        await createUserWithEmailAndPassword(auth, email, password)
        .then(()=>{
            navigate("/login");
        }).catch((err)=>{
            HandleSignErrors(err.code, setErrorMessage);
        }); 
    }
    return(
        <div className="loginContainer">
            <h1>Sign Up</h1>
            <input type="email" name="email" id="email" placeholder='Email' required onChange={e => setEmail(e.target.value)}/>
            <input type="password" name="password" id="password" placeholder='Password' required onChange={e => setPassword(e.target.value)}/>
            <button onClick={onSubmitSignUp}>Sign In</button>
            {errorMessage ? 
                <p className="errorMessage">{errorMessage}</p>
                : 
                ""
            }
            <p>Already have an account? </p>
            <NavLink to='/login'>Log In</NavLink>
        </div>
    )
    


}