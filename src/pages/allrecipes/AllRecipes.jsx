import {useEffect, useState} from "react";
import axios from "axios";
import Recipe from "../../components/recipe/Recipe.jsx";
import './AllRecipes.css';
import process from "../../../.eslintrc.cjs";

function AllRecipes() {
    const [error, toggleError] = useState(false);
    const [loading, toggleLoading] = useState(false);
    const [recipes, setRecipes] = useState([])

    const appId = `${process.env.REACT_APP_API_ID}`;
    const appKey = `${process.env.REACT_APP_API_KEY}`


    useEffect(() => {
        const controller = new AbortController();

        async function fetchData() {
            toggleLoading(true);
            toggleError(false);

            try {
                const response = await axios.get(`https://api.edamam.com/api/recipes/v2?type=public&app_id=${appId}&app_key=${appKey}&diet=balanced`, {
                    signal: controller.signal,
                });
                setRecipes(response.data.hits);
            } catch (e) {
                if (axios.isCancel(e)) {
                    console.error('Request is cancelled');
                } else {
                    console.error(e);
                    toggleError(true);
                }
            } finally {
                toggleLoading(false);
            }
        }

        void fetchData()

        return function cleanup() {
            controller.abort();
        }

    }, [recipes]);

    return (
        <>
            <main>
            <h1>All recipes</h1>
            <p>Here you can browse through all the recipes!</p>
            </main>

            <section>
            <div className='recipes-results'>
                {Object.keys(recipes).length > 0 &&
                    recipes.map((recipe) => {
                        return <Recipe
                            label={recipe.recipe.label}
                            image={recipe.recipe.image}
                            calories={recipe.recipe.calories}
                            ingredients={recipe.recipe.ingredients}
                        />
                    })}
            </div>
            </section>

            {error && <p className="error">Something went wrong with fetching the data</p>}
            {loading && <p className="loading">Loading...</p>}


        </>
    )
}

export default AllRecipes;