import axios from "axios";
import {useState} from "react";
import Button from "../../components/button/Button.jsx";


function Homepage() {
    const [mood, setMood] = useState('healthy');
    const [time, setTime] = useState('20');
    const [motivation, setMotivation] = useState('5')

    async function fetchData() {
        try {
            const response = await axios.get(`https://api.edamam.com/api/recipes/v2?type=public&app_id=48b29177&app_key=1f0f159ce52371ca9f5937111c6446c1&ingr=${motivation}&time=${time}&tag=${mood}`);
            console.log(response.data);
        } catch (e) {
            console.error(e);
        }
    }


    return (
        <div>
            <h1>I'm Hangry</h1>

            <form>
                <p>What is your mood?</p>
                <input
                    type='text'
                    id='mood-field'
                    onChange={(e) => setMood(e.target.value)}
                />
                <p>How much time do you have to cook?</p>
                <input
                    type='text'
                    id='time-field'
                    onChange={(e) => setTime(e.target.value)}
                />
                <p>Are you feeling like a chef today?</p>
                <input
                    type='text'
                    id='motivation-field'
                    onChange={(e) => setMotivation(e.target.value)}
                />
                <div>
                    <Button
                        className='recipe-button'
                        type='button'
                        onClick={fetchData}
                        text='Show me a recipe!'
                    />
                </div>
            </form>
        </div>
    )
}

export default Homepage;