import React from "react";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { CheckIfUserIsAuthorized } from "../components/functionality";
import NavBar from "../components/Home/Navbar";

export default function Home() {
    // const navigate = useNavigate();

    // const onSubmitSignOut = async (e) => {
    //     e.preventDefault();
    //     await signOut(auth)
    //         .then(() => {
    //             navigate("/login");
    //         })
    //         .catch((err) => {
    //             console.error(err);
    //         });
    // };

    CheckIfUserIsAuthorized();

    return (
        <div className="bg-green-200">
            <NavBar />
            testuje
        </div>
    );
}
