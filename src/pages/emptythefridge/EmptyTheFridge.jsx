import {useState} from "react";
import axios from "axios";
import Recipe from "../../components/recipe/Recipe.jsx";
import Button from "../../components/button/Button.jsx";
import './EmptyTheFridge.css'

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
            console.log(response.data.hits)
            setRecipes(response.data.hits);
            toggleLoading(false);
        } catch (e) {
            console.error(e);
            toggleError(true);
        } finally {
            toggleLoading(false);
        }
    }


    return (
        <>
            <main>
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
                    <Button
                        className='recipe-button'
                        type='submit'
                        onClick={fetchRecipes}
                        text='Show me a recipe!'
                    />
                </div>
            </main>

            <section>
                <div className='search-results'>
                    {Object.keys(recipes).length > 0 &&
                        recipes.map((recipe) => {
                            return <Recipe
                                key={recipe.recipe.label}
                                label={recipe.recipe.label}
                                image={recipe.recipe.image}
                                calories={recipe.recipe.calories}
                                ingredients={recipe.recipe.ingredients}
                            />
                        })}
                </div>
            </section>

            {error && <p className='error'>Something went wrong with fetching the data</p>}
            {loading && <p className='loading'>Loading...</p>}
        </>
    )
}

export default EmptyTheFridge;