import "./styles/style.css";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import Users from "./pages/Users";
import Profile from "./pages/Profile";
import {Szymon, Goblin, Maja} from "./pages/polsl/Szymon";

function App() {
    return (
        <div className="w-full h-screen bg-emerald-300 flex justify-center">
            <Router>
                <Routes>
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/login" element={<SignIn />} />
                    <Route path="/users" element={<Users />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/" element={<Navigate to="/home" />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/users" element={<Users />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="*" element={<Navigate to="/home" />} />
                    <Route path="/szymon" element={<Szymon />} />
                    <Route path="/maja" element={<Maja />} />
                    <Route path="/goblin" element={<Goblin />} />
                    {/* <Route path="/szymon" element={<Szymon />} /> */}

                </Routes>
            </Router>
        </div>
    );
}

export default App;
