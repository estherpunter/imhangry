import {useEffect, useState} from "react";
import axios from "axios";
import Recipe from "../../components/recipe/Recipe.jsx";
import './AllRecipes.css';
import Button from "../../components/button/Button.jsx";

// import process from "../../../.eslintrc.cjs";

function AllRecipes() {
    const [error, toggleError] = useState(false);
    const [loading, toggleLoading] = useState(false);
    const [recipes, setRecipes] = useState([])
    const [currentPage, setCurrentPage] = useState(1);

    const recipesPerPage = 64;

    const startIndex = (currentPage - 1) * recipesPerPage;
    const endIndex = startIndex + recipesPerPage;
    const visibleRecipes = recipes.slice(startIndex, endIndex);

    const totalPages = Math.ceil(recipes.length / recipesPerPage);

    const handleNextPage = () => {
        setCurrentPage(currentPage + 1);
        console.log('Next page clicked. Current page:', currentPage + 1);
    };

    const handlePrevPage = () => {
        setCurrentPage(currentPage - 1);
    };


    // const appId = `${process.env.REACT_APP_API_ID}`;
    // const appKey = `${process.env.REACT_APP_API_KEY}`

    const appId = '48b29177';
    const appKey = '1f0f159ce52371ca9f5937111c6446c1';

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

    }, []);

    return (
        <>
            <main>
                <h1>All recipes</h1>
                <p>Here you can browse through all the recipes!</p>
            </main>

            <section>
                <div className='recipes-results'>
                    {Object.keys(visibleRecipes).length > 0 &&
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