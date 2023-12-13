import React, { useEffect, useState } from 'react'
import { onAuthStateChanged, signOut} from 'firebase/auth'
import { auth } from '../config/firebase'
import { useNavigate } from 'react-router-dom';

export default function Home() {

    const navigate = useNavigate();
    const [userId, setUserId] = useState();

    const onSubmitSignOut = async (e) => {  
        e.preventDefault();
        await signOut(auth)
        .then(()=>{
            navigate('/login');
        }).catch(err =>{
            console.error(err);
        })
    }

    useEffect(()=>{
        onAuthStateChanged(auth,(user)=>{
            if(user){
                const uid = user.email;
                console.log(uid);
                setUserId(uid)
                
            }else{
                navigate('/login')
                console.log("nie jest");
            }
        }) 

    },[])


    return(
        <div className="">
                asdasdasdasdads
                {userId}
                <button onClick={onSubmitSignOut}>Sing Out</button>
        </div>
    )
}