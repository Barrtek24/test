import "./styles/style.css"
import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";

function App() {
  
  return (
    <div className="mainContainer">
      <Router>
        <Routes>
          <Route path="/signup" element={< SignUp/>}/>
          <Route path="/login" element={< SignIn/>}/>
          <Route path="/" element={<Navigate to="/home"/>}/>
          <Route path="/home" element={<Home />}/>
          <Route path="*" element={<Navigate to="/home"/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
