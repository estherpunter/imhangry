import axios from "axios";
import {useEffect, useState} from "react";
import Recipe from "../../components/recipe/Recipe.jsx";

function AllRecipes() {
    const [error, toggleError] = useState(false);
    const [loading, toggleLoading] = useState(false);
    const [recipes, setRecipes] = useState([]);
    const [search, setSearch] = useState('');
    const [query, setQuery] = useState('banana')

    const appId = '48b29177';
    const appKey = '1f0f159ce52371ca9f5937111c6446c1'

    useEffect(() => {
        void fetchData()
    }, [query]);

    async function fetchData() {
        toggleError(false);
        toggleLoading(true);


        try {
            const response = await axios.get(`https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${appId}&app_key=${appKey}`, {
                    'Accept': 'application/json',
                    'Accept-Language': 'en',
                }
            );
            console.log(response.data);
            setRecipes(response.data);

            toggleLoading(false);
        } catch (e) {
            console.error(e);
            toggleError(true);
        }
    }

    function getSearch(e) {
        e.prevent.default();
        setQuery(search);
        setSearch('');
    }

    return (
        <>
            <h1>All recipes</h1>
            <p>Here you can browse through all the recipes!</p>

            <form onSubmit={getSearch}>
                <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <button type="submit">Search</button>
            </form>

            <div>
                {/*{recipes.map(recipe => (*/}
                {/*    <Recipe*/}
                {/*        key={recipe.recipe.label}*/}
                {/*        title={recipe.recipe.label}*/}
                {/*        image={recipe.recipe.image}*/}
                {/*        ingredients={recipe.recipe.ingredients}*/}
                {/*    />*/}
                {/*))}*/}
            </div>

            {error && <p className="error">Something went wrong with fetching the data</p>}
            {loading && <p className="loading">Loading...</p>}

        </>
    )
}

export default AllRecipes;