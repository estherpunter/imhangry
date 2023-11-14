import './App.css'
import {Route, Routes} from "react-router-dom";
import Homepage from "./pages/homepage/Homepage.jsx";
import AllRecipes from "./pages/allrecipes/AllRecipes.jsx";
import EmptyTheFridge from "./pages/emptythefridge/EmptyTheFridge.jsx";
import SignInPage from "./pages/signin/SignInPage.jsx";
import Navbar from "./components/navbar/Navbar.jsx";

function App() {

  return (
    <>
        <Navbar/>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/allrecipes" element={<AllRecipes/>}/>
        <Route path="/emptythefridge" element={<EmptyTheFridge/>}/>
        <Route path="/signin" element={<SignInPage/>}/>
      </Routes>
    </>
  )
}

export default App
