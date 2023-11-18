import {Link} from "react-router-dom";
import './Recipe.css';

function Recipe({label, image, calories, ingredients, link}) {

    return (
        <article className='recipe-card'>
        <h3>{label}</h3>
            <img src={image} alt="Recipe image"/>
            <h4>Recipe details</h4>
            <p>Calories: {calories}</p>
            <p>{ingredients}</p>
            <p>Click <Link to={link}>here</Link> for the preparation instructions</p>
        </article>
    )
}

export default Recipe;