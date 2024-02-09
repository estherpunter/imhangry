import './RecipeCards.css';
import {Link} from "react-router-dom";

function RecipeCard({label}) {
    return (
        <>
            <main className="recipe-details">
                <h2>{label}</h2>
                <h3>Recipe details</h3>
                <p>Calories: </p>
                <p>Serving size: </p>
                <p>Allergies: </p>
            </main>
            <section className="ingredients-section">
                <h2>Ingredients: </h2>
                <Link to="/">Link to preparation instructions</Link>
                <img className="recipe-image" src="" alt=""/>
            </section>
        </>

    )

}

export default RecipeCard;