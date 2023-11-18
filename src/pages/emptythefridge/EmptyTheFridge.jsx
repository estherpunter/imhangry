import {useState} from "react";
import axios from "axios";
import Recipe from "../../components/recipe/Recipe.jsx";

function EmptyTheFridge() {
    const [error, toggleError] = useState(false);
    const [loading, toggleLoading] = useState(false);
    const [recipes, setRecipes] = useState([]);
    const [query, setQuery] = useState('');

    const appId = '48b29177';
    const appKey = '1f0f159ce52371ca9f5937111c6446c1'

    async function fetchRecipes() {
        toggleError(false);
        toggleLoading(true);

        try {
            const response = await axios.get(`https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${appId}&app_key=${appKey}`);
            setRecipes(response.data.hits);
            toggleLoading(false);
        } catch (e) {
            console.error(e);
            toggleError(true);
        }
    }


    return (
        <>
            <h1>Empty the fridge</h1>
            <p>What ingredient do you want to use?</p>
            <div>
                <input
                    type="text"
                    id="ingredient-field"
                    name="ingredient-field"
                    placeholder="For example: banana"
                    onChange={(e) => setQuery(e.target.value)}
                />
            </div>

            <div>
                <button type="button" onClick={fetchRecipes}>
                    Show me a recipe!
                </button>
            </div>
            <div className='search-results'>
                {Object.keys(recipes).length > 0 &&
                    recipes.map((recipe) => {
                        return <Recipe
                                label={recipe.recipe.label}
                                image={recipe.recipe.image}
                                calories={recipe.recipe.calories}
                                ingredients={recipe.ingredients}
                                link={recipe.recipe.url}
                            />
                    }) || <p>There are no recipes with this ingredient</p>}
            </div>
            {error && <p>Something went wrong with fetching the data</p>}
            {loading && <p>Loading...</p>}
        </>
    )
}

export default EmptyTheFridge;