import axios from "axios";
import {useState} from "react";
import {useForm} from "react-hook-form";


function AllRecipes() {
    const [error, toggleError] = useState(false);
    const [loading, toggleLoading] = useState(false);


    async function fetchData() {
        toggleError(false);
        toggleLoading(true);

        try {
            const response = await axios.get('https://api.edamam.com/api/recipes/v2?type=public&app_id=48b29177&app_key=1f0f159ce52371ca9f5937111c6446c1', {
                    'Accept': 'application/json',
                    'Accept-Language': 'en',
                },
                {
                    "cache-control": "private",
                    "connection": "keep-alive",
                    "content-language": "en",
                    "content-length": "49",
                    "content-type": "application/json",
                    "date": "Wed, 15 Nov 2023 12:30:09 GMT",
                    "expires": "Thu, 01 Jan 1970 00:00:00 GMT",
                    "server": "openresty",
                    "strict-transport-security": "max-age=15552001",
                    "x-envoy-upstream-service-time": "210",
                    "x-request-id": "632ca5c3d70fa8337239dcadfa2b244f",
                    "x-served-by": "ip-10-0-1-215.ec2.internal/10.0.1.215"
                }
            );
            console.log(response.data);
            toggleLoading(false);
        } catch (e) {
            console.error(e);
            toggleError(true);
        }
    }


    return (
        <>
            Here you can browse through all the recipes!
                <button type="button" onClick={fetchData}>
                    Show all recipes
                </button>

            {error && <p>Something went wrong with fetching the data</p>}
            {loading && <p>Loading...</p>}

        </>
    )
}

export default AllRecipes;