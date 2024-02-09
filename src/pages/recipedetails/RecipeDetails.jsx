import './RecipeDetails.css';
import {Link, useParams} from "react-router-dom";

function RecipeDetails() {
    const {label} = useParams();

return (
    <>
    <main className='recipe-details'>
        <h2>{label}</h2>
        <h3>Recipe details</h3>
        <p>Calories: </p>
        <p>Serving size: </p>
        <p>Allergies: </p>
    </main>
    <section>
        <h3>Ingredients: </h3>
        <Link to="/preparationinstructions">Link to preparation instructions</Link>
        <img src="" alt=""/>
    </section>
    </>
)

}

export default RecipeDetails;