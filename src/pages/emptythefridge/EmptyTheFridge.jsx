import {useState} from "react";
import axios from "axios";
import Recipe from "../../components/recipe/Recipe.jsx";

function EmptyTheFridge() {
    const [error, toggleError] = useState(false);
    const [loading, toggleLoading] = useState(false);

    const [recipes, setRecipes] = useState([]);

    const query = 'banana';

    const appId = '48b29177';
    const appKey = '1f0f159ce52371ca9f5937111c6446c1'

    async function fetchRecipes() {
        toggleError(false);
        toggleLoading(true);

        try {
            const response = await axios.get(`https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${appId}&app_key=${appKey}`);
            console.log(response.data.hits);
            setRecipes(response.data.hits);

            toggleLoading(false);
        } catch (e) {
            console.error(e);
            toggleError(true);
        }
    }


    function addInputField() {
        const container = document.getElementById('inputContainer');
        const newInput = document.createElement('input');
        newInput.type = 'text';
        newInput.name = 'inputField[]';
        container.appendChild(newInput);
        container.insertBefore(newInput, container.firstChild);
    }


    return (
        <>
            <h1>Empty the fridge</h1>
            <p>What ingredient(s) do you want to use?</p>
            <div id="inputContainer">
                <input
                    type="text"
                    id="ingredient-field"
                    name="ingredient-field"
                    placeholder="Bijv. banaan"
                />
                <button type="button" onClick={addInputField}>
                    Add ingredient
                </button>
            </div>

            <div>
                <button type="button" onClick={fetchRecipes}>
                    Show me a recipe!
                </button>
            </div>
            <div className='search-results'>
                {recipes.map((recipe) => {
                    return <Recipe
                        key={recipe.id}
                        label={recipe.recipe.label}
                        image={recipe.recipe.image}
                        calories={recipe.recipe.calories}
                        ingredients={recipe.ingredients}
                        link={recipe.uri}
                    />
                })}

            </div>

            {error && <p>Something went wrong with fetching the data</p>}
            {loading && <p>Loading...</p>}
        </>
    )
}

export default EmptyTheFridge;