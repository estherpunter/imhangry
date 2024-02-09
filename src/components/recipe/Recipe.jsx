import './Recipe.css';
import {Link} from "react-router-dom";

function Recipe({label, image, calories, ingredients}) {
    return (
        <article
            className='recipe-card'>
            <img className='recipe-image' src={image} alt={label}/>
            <Link to="/recipedetails">{label}</Link>
            <p>Calories: {Math.round(calories)} </p>
            <p>Ingredients: {ingredients.length}</p>
        </article>
    )
}

export default Recipe;