import {useEffect, useState} from "react";
import axios from "axios";

function AllRecipes() {
    const [error, toggleError] = useState(false);
    const [loading, toggleLoading] = useState(false);


    useEffect(() => {
        console.log('ik ben gemount')

        async function fetchData() {
            toggleLoading(true);

            try {
                const response = await axios.get('https://api.edamam.com/api/recipes/v2?type=public&app_id=48b29177&app_key=1f0f159ce52371ca9f5937111c6446c1&diet=balanced');
                console.log(response.data.hits);
            } catch (e) {
                console.error(e);
                toggleError(true)
            }
        }

        void fetchData;

    }, []);


    return (
        <>
            <h1>All recipes</h1>
            <p>Here you can browse through all the recipes!</p>

            {error && <p className="error">Something went wrong with fetching the data</p>}
            {loading && <p className="loading">Loading...</p>}

        </>
    )
}

export default AllRecipes;