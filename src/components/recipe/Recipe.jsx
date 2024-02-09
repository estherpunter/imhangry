import './Recipe.css';
import {Link} from "react-router-dom";
import roundCalories from "../../helpers/roundCalories.js";

function Recipe({label, image, calories, ingredients}) {
    return (
        <article
            className='recipe-card'>
            <img className='recipe-image' src={image} alt={label}/>
            <Link to={`/recipe/${label}`}>{label}</Link>
            <p>Calories: {roundCalories(calories)} </p>
            <p>Ingredients: {ingredients.length}</p>
        </article>
    )
}


export default Recipe;