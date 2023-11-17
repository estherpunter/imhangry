
function Recipe(title, calories, image, ingredients) {
    return(
        <div>
            <h2>{title}</h2>
            <ol>
                {ingredients.map(ingredient => (
                    <li>{ingredient.text}</li>
                ))}
            </ol>
            <p>Calories: {calories.toFixed()}</p>
            <img src={image} alt="Recipe image"/>
        </div>
    )
}

export default Recipe;