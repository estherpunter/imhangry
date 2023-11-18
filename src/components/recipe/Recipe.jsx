import './Recipe.css';

function Recipe({label, image, calories, ingredients}) {
    return (
        <article className='recipe-card'>
            <img className='recipe-image' src={image} alt="Recipe image"/>
            <h4>{label}</h4>
            <p>Calories: {Math.round({calories})}</p>
            <p>Ingredients: {ingredients.length}</p>
        </article>
    )
}

export default Recipe;