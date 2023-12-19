import React from "react";
import NavBar from "../components/Home/Navbar";
import { CheckIfUserIsAuthorized } from "../components/functionality";

export default function Profile() {
    CheckIfUserIsAuthorized();
    return (
    <div className="">
        <NavBar /> 
    </div>)
}
