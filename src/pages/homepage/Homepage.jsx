import axios from "axios";
import {useState} from "react";


function Homepage() {
    const [mood, setMood] = useState('');
    const [time, setTime] = useState('');
    const [motivation, setMotivation] = useState('')

    async function fetchData() {
        try {
            const response = await axios.get(`https://api.edamam.com/api/recipes/v2?type=public&app_id=48b29177&app_key=1f0f159ce52371ca9f5937111c6446c1&ingr=${motivation}&time=${time}&tag=${mood}`);
            console.log(response.data.hits);
        } catch (e) {
            console.error(e);
        }
    }


    return (
        <div>
            <h1>I'm Hangry</h1>

            <form onSubmit={fetchData}>
                <p>What is your mood?</p>
                <input
                    type='text'
                    onChange={(e) => setMood(e.target.value)}
                />
                <p>How much time do you have to cook?</p>
                <input
                    type='text'
                    onChange={(e) => setTime(e.target.value)}
                />
                <p>Are you feeling like a chef today?</p>
                <input
                    type='text'
                    onChange={(e) => setMotivation(e.target.value)}
                />
                <div>
                    <button
                        className='form-button'
                        type="submit"
                    >
                        Show me a recipe!
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Homepage;