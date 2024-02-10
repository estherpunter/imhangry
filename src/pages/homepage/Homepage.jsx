import axios from "axios";
import {useState} from "react";
import Button from "../../components/button/Button.jsx";
import './Homepage.css';
import Label from "../../components/label/Label.jsx";
import Recipe from "../../components/recipe/Recipe.jsx";

function Homepage() {
    const [error, toggleError] = useState(false);
    const [loading, toggleLoading] = useState(false);

    const [selectedMood, setSelectedMood] = useState('');
    const [selectedTime, setSelectedTime] = useState('');
    const [selectedMotivation, setSelectedMotivation] = useState('')
    const [recipes, setRecipes] = useState([]);

        async function fetchData() {
            toggleLoading(true);
            toggleError(false);

            const appId = process.env.REACT_APP_API_ID;
            const appKey = process.env.REACT_APP_API_KEY;


            try {
                const response = await axios.get(`https://api.edamam.com/api/recipes/v2?type=public&app_id=${appId}&app_key=${appKey}&ingr=${selectedMotivation}&time=${selectedTime}&tag=${selectedMood}`);
                setRecipes(response.data.hits);
            } catch (e) {
                console.error(e);
                toggleError(true);
            } finally {
                toggleLoading(false)
            }
        }


    return (
        <>
            <main>
                <h1>I'm Hangry</h1>

                <Label
                    htmlText="mood-field"
                    question="What is your mood?"
                    value={selectedMood}
                    onChange={(e) => setSelectedMood(e.target.value)}
                    id="mood-field"
                    optionValue1="comfort"
                    optionValue2="healthy"
                    optionText1="Hangry"
                    optionText2="Feeling good"
                />

                <Label
                    htmlText="time-field"
                    question="How much time do you have to cook?"
                    value={selectedTime}
                    onChange={(e) => setSelectedTime(e.target.value)}
                    id="time-field"
                    optionValue1="20"
                    optionValue2="20+"
                    optionText1="Less than 20 minutes"
                    optionText2="More than 20 minutes"
                />

                <Label
                    htmlText="motivation-field"
                    question="Are you feeling like a chef today?"
                    value={selectedMotivation}
                    onChange={(e) => setSelectedMotivation(e.target.value)}
                    id="motivation-field"
                    optionValue1="5"
                    optionValue2="5+"
                    optionText1="Not at all"
                    optionText2="Hell yeah!"
                />

                <div>
                    <Button
                        className='recipe-button'
                        type='button'
                        onClick={fetchData}
                        text='Show me a recipe!'
                    />
                </div>
            </main>

            <section>
                <div className='homepage-results'>
                    {Object.keys(recipes).length > 0 &&
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
            </section>



            {error && <p className="error">Something went wrong with fetching the data</p>}
            {loading && <p className="loading">Loading...</p>}

        </>
    )
}

export default Homepage;