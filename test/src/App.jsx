// import "./styles/style.css";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
    Link,
    useParams
} from "react-router-dom";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Group from "./pages/interpol/Group";
import Poszukiwani from "./pages/interpol/Poszukiwani";

function App() {



    return (
        <div className="">
            <Router>
                <Routes>
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/login" element={<SignIn />} />
                    <Route path="/" element={<Navigate to="/home" />} />
                    <Route path="/home" element={<Home />} />

                    
                    <Route path="/interpol" element={<Poszukiwani />} />
                    <Route path="/group/:groupId" element={<Group />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="*" element={<Navigate to="/home" />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
// import React, { useState, useEffect } from "react";


// const PersonPage = () => {
//     const [isLoading, setIsLoading] = useState(true);
//     const [data, setData] = useState();
//     const {personId} = useParams();

//     console.log(data);
//     useEffect(() => {
//         fetch(`https://swapi.dev/api/people/${personId}`, {})
//             .then((res) => res.json())
//             .then((response) => {
//                 setData(response);
//                 setIsLoading(false);
//                 console.log(`https://swapi.dev/api/people/${personId}`);
//             })
//             .catch((error) => console.log(error));
//     }, [personId]);

//     return (
//         <>
//             {!isLoading && (
//                 <>
//                     <h1>Name: {data.name}</h1>
//                     <h2>Height: {data.height}</h2>
//                     <h2>Mass: {data.mass}</h2>
//                     <h2>Hair Color: {data.hair_color}</h2>
//                     <h2>Skin Color: {data.skin_color}</h2>
//                     <h2>Eye Color: {data.eye_color}</h2>
//                     <h2>Birth Year: {data.birth_year}</h2>
//                     <h2>Gender: {data.gender}</h2>
//                     <Link to="/">Back to homepage</Link>
//                 </>
//             )}
//         </>
//     );
// };

// const HomePage = () => {
//     const [isLoading, setIsLoading] = useState(true);
//     const [data, setData] = useState();

//     useEffect(() => {
//         fetch("https://swapi.dev/api/people/", {})
//             .then((res) => res.json())
//             .then((response) => {
//                 setData(response.results);
//                 setIsLoading(false);
//             })
//             .catch((error) => console.log(error));
//     }, []);
//     console.log(data);
//     return (
//         <>
//             {!isLoading &&
//                 data.map((person, index) => {
//                     return (
//                         <h5 key={index}>
                            
//                             <Link to={`/person/${index + 1}`}>
//                                 {person.name}'s Page
//                             </Link>
//                         </h5>
//                     );
//                 })}
//         </>
//     );
// };

// const App = () => {
//     return (
//         <>
//             <Router>
//                 <Routes>
//                     <Route path="/" element={<HomePage/>} />
                    
//                     <Route path="/person/:personId" element={<PersonPage />} />
//                 </Routes>
//             </Router>
//         </>
//     );
// };

// export default App;
