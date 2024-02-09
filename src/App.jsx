import './App.css'
import {Route, Routes} from "react-router-dom";
import Homepage from "./pages/homepage/Homepage.jsx";
import AllRecipes from "./pages/allrecipes/AllRecipes.jsx";
import EmptyTheFridge from "./pages/emptythefridge/EmptyTheFridge.jsx";
import SignInPage from "./pages/signin/SignInPage.jsx";
import Navbar from "./components/navbar/Navbar.jsx";
import SignUpPage from "./pages/signup/SignUpPage.jsx";
import ProfilePage from "./pages/profile/ProfilePage.jsx";
import RecipeDetails from "./pages/recipedetails/RecipeDetails.jsx";

function App() {

    return (
        <>
            <main className='outer-container'>
                <header className='header-container'>
                <Navbar/>
                </header>
                <Routes>
                    <Route path="/" element={<Homepage/>}/>
                    <Route path="/allrecipes" element={<AllRecipes/>}/>
                    <Route path="/emptythefridge" element={<EmptyTheFridge/>}/>
                    <Route path="/signup" element={<SignUpPage/>}/>
                    <Route path="/signin" element={<SignInPage/>}/>
                    <Route path="/profile" element={<ProfilePage/>}/>
                    <Route path="/recipe/:label" element={<RecipeDetails/>}/>
                </Routes>
            </main>
            <footer className='footer'>
                <p>Frontend Final Assignment by Esther Punter</p>
            </footer>
        </>
    )
}

export default App
