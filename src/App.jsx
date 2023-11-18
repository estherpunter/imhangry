import './App.css'
import {Route, Routes} from "react-router-dom";
import Homepage from "./pages/homepage/Homepage.jsx";
import AllRecipes from "./pages/allrecipes/AllRecipes.jsx";
import EmptyTheFridge from "./pages/emptythefridge/EmptyTheFridge.jsx";
import SignInPage from "./pages/signin/SignInPage.jsx";
import Navbar from "./components/navbar/Navbar.jsx";
import SignUpPage from "./pages/signup/SignUpPage.jsx";
import ProfilePage from "./pages/profile/ProfilePage.jsx";
import axios from "axios";

function App() {

    return (
        <>
            <div className='background-image'>
                <header className='header'>
                <Navbar/>
                </header>
                <Routes>
                    <Route path="/" element={<Homepage/>}/>
                    <Route path="/allrecipes" element={<AllRecipes/>}/>
                    <Route path="/emptythefridge" element={<EmptyTheFridge/>}/>
                    <Route path="/signup" element={<SignUpPage/>}/>
                    <Route path="/signin" element={<SignInPage/>}/>
                    <Route path="/profile" element={<ProfilePage/>}/>
                </Routes>
            </div>
        </>
    )
}

export default App
