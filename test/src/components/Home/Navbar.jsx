import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
    return(
        <div className="w-full flex justify-around p-5 sticky">
            <NavLink to="/home">HOME</NavLink>
            <NavLink to="/users">USERS</NavLink>
            <NavLink to="/profile">PROFILE</NavLink>
        </div>
    )
}