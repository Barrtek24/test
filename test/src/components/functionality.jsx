import { useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import { auth } from "../config/firebase";
import { onAuthStateChanged } from "firebase/auth";


export function CheckIfUserIsAuthorized() {

    const navigate = useNavigate();
    useEffect(()=>{
        onAuthStateChanged(auth,(user)=>{
            if(!user){}
                navigate('/login');
            })
    },[navigate])
}

export const HandleSignErrors = (error, setErrorMessage) => {
    switch (error) {
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
}




