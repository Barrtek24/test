import React, { useEffect, useState } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../config/firebase'

export default function Home() {

    const [userId, setUserId] = useState();

    useEffect(()=>{
        onAuthStateChanged(auth,(user)=>{
            if(user){
                const uid = user.email;
                console.log(uid);
                setUserId(uid)
            }else{
                console.log("nie jest");
            }
        })

    },[])


    return(
        <div className="">
                {userId}
        </div>
    )
}