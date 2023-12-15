import React from "react";
import NavBar from "../components/Home/Navbar";
import { CheckIfUserIsAuthorized } from "../components/functionality";
export default function Users() {
    CheckIfUserIsAuthorized();
    return (
    <div className="w-full">
        <NavBar />
        <div className="flex justify-center">ss</div>
    </div>
    )
}
