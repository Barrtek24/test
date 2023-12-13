import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBrnf9cAuLiwZU7knWPx5Qp2WvqGTtXmKw",
    authDomain: "test-548bf.firebaseapp.com",
    projectId: "test-548bf",
    storageBucket: "test-548bf.appspot.com",
    messagingSenderId: "513598987730",
    appId: "1:513598987730:web:37d44486d6d8218275fc0b",
    measurementId: "G-DRFZCKS64V",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
