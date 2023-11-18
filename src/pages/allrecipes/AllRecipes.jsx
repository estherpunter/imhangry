import Recipe from "../../components/recipe/Recipe.jsx";
import {useState} from "react";

function AllRecipes() {
    const [error, toggleError] = useState(false);
    const [loading, toggleLoading] = useState(false);





    return (
        <>
            <h1>All recipes</h1>
            <p>Here you can browse through all the recipes!</p>

            <button type="button" >Search</button>



            {error && <p className="error">Something went wrong with fetching the data</p>}
            {loading && <p className="loading">Loading...</p>}

        </>
    )
}

export default AllRecipes;