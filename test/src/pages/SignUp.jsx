import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";
import { HandleSignErrors } from "../components/functionality";

export default function SignUp() {
    const navigate = useNavigate();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [errorMessage, setErrorMessage] = useState();

    const onSubmitSignUp = async (e) => {
        e.preventDefault();
        await createUserWithEmailAndPassword(auth, email, password)
            .then(() => {
                navigate("/home");
            })
            .catch((err) => {
                HandleSignErrors(err.code, setErrorMessage);
            });
    };
    return (
        <div className="flex flex-col items-center p-4 text-lg mt-60">
            <h1 className="text-3xl font-bold ">Sign Up</h1>
            <input
                className="m-2 rounded-xl p-2 focus:border-sky-500 outline-none border-2 "
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                required
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                className="m-2 rounded-xl p-2 focus:border-sky-500 outline-none border-2"
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                required
                onChange={(e) => setPassword(e.target.value)}
            />
            <button
                className="border-2 rounded-xl p-2 bg-slate-400 text-black hover:border-sky-500 my-6"
                onClick={onSubmitSignUp}
            >
                Sign In
            </button>
            {errorMessage ? (
                <p className="text-red-600 ">{errorMessage}</p>
            ) : (
                ""
            )}
            <p>
                Already have an account?{" "}
                <NavLink to="/login">
                    <span className="text-lime-500">Log In</span>
                </NavLink>
            </p>
        </div>
    );
}
