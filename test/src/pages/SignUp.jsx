import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../config/firebase'

export default function SignUp() {

    const navigate = useNavigate();

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [errorMessage, setErrorMessage] = useState();
    

    const onSubmitSignUp =  async (e) => {
        e.preventDefault();

        await createUserWithEmailAndPassword(auth, email, password)
        .then((userCrd)=>{
            const user = userCrd;
            console.log(user);
            navigate("/login");
        }).catch((err)=>{
            console.log(err.code);
            switch (err.code) {
                case "auth/missing-password":
                    setErrorMessage("Password is missing.")
                    break;
                case "auth/invalid-email":
                    setErrorMessage("Invalid email.");
                    break;
                case "auth/weak-password":
                    setErrorMessage("Password is to short.");
                    break;
                case "auth/missing-email":
                    setErrorMessage("Email is missing.");
                    break;
                default:
                    setErrorMessage("Invalid Email or Password.")
                    break;
            }
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