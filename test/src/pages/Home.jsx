import React from 'react'
import {signOut} from 'firebase/auth'
import { auth } from '../config/firebase'
import { useNavigate } from 'react-router-dom';
import {CheckIfUserIsAuthorized} from '../components/functionality';

export default function Home() {

    const navigate = useNavigate();

    const onSubmitSignOut = async (e) => {  
        e.preventDefault();
        await signOut(auth)
        .then(()=>{
            navigate('/login');
        }).catch(err =>{
            console.error(err);
        })
    }

    CheckIfUserIsAuthorized();
    


    return(
        <div className="">
                
                <button onClick={onSubmitSignOut}>Sing Out</button>
        </div>
    )
}