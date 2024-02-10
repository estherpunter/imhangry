import {useEffect, useState} from "react";
import axios from "axios";
import Recipe from "../../components/recipe/Recipe.jsx";
import './AllRecipes.css';
import Button from "../../components/button/Button.jsx";
import usePages from "../../helpers/usePages.js";

function AllRecipes() {
    const [error, toggleError] = useState(false);
    const [loading, toggleLoading] = useState(false);
    const [recipes, setRecipes] = useState([])

    const itemsPerPage = 64;
    const {currentPage, handleNextPage, handlePrevPage, getVisibleItems, getTotalPages} = usePages(itemsPerPage);

    const visibleRecipes = getVisibleItems(recipes);
    const totalPages = getTotalPages(recipes.length);

    const appId = process.env.REACT_APP_API_ID;
    const appKey = process.env.REACT_APP_API_KEY;


    useEffect(() => {

        const controller = new AbortController();
        async function fetchData() {
            toggleLoading(true);
            toggleError(false);

            const endpoint = "https://api.edamam.com/api/recipes/v2";

            try {
                const response = await axios.get(endpoint, {
                    signal: controller.signal,
                    params: {
                        type: "public",
                        app_id: appId,
                        app_key: appKey,
                        diet: "balanced",
                    }
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

        void fetchData();

        return function cleanup() {
            controller.abort();
        }

    }, [currentPage, appKey, appId]);

    return (
        <>
            <main>
                <h1>All recipes</h1>
                <p>Here you can browse through all the recipes!</p>
            </main>

            <section>
                <div className='recipes-results'>
                    {Object.keys(visibleRecipes).length > 0 &&
                        visibleRecipes.map((recipe) => {
                            return (
                                    <Recipe
                                        key={recipe.recipe.label}
                                        label={recipe.recipe.label}
                                        image={recipe.recipe.image}
                                        calories={recipe.recipe.calories}
                                        ingredients={recipe.recipe.ingredients}
                                    />
                            );
                        })}
                </div>
                <Button
                    className='page-button'
                    type='button'
                    onClick={handlePrevPage}
                    disabled={currentPage === 1}
                    text='Previous'
                />
                <Button
                    className='page-button'
                    type='button'
                    onClick={handleNextPage}
                    disabled={currentPage === totalPages}
                    text='Next'
                />

            </section>

            {error && <p className="error">Something went wrong with fetching the data</p>}
            {loading && <p className="loading">Loading...</p>}


        </>
    )
}

export default AllRecipes;