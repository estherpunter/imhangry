import axios from "axios";
import {useState} from "react";
import Button from "../../components/button/Button.jsx";


function Homepage() {
    const [selectedMood, setSelectedMood] = useState('');
    const [selectedTime, setSelectedTime] = useState('');
    const [selectedMotivation, setSelectedMotivation] = useState('')

    async function fetchData() {

        const appId = '48b29177';
        const appKey = '1f0f159ce52371ca9f5937111c6446c1'


        try {
            const response = await axios.get(`https://api.edamam.com/api/recipes/v2?type=public&app_id=${appId}app_key=${appKey}&ingr=${selectedMotivation}&time=${selectedTime}&tag=${selectedMood}`);
            console.log(response.data);
        } catch (e) {
            console.error(e);
        }
    }

    return (
        <div>
            <h1>I'm Hangry</h1>

            <label htmlFor="mood-field">
                <p>What is your mood?</p>
                <select
                    value={selectedMood}
                    onChange={(e) => setSelectedMood(e.target.value)}
                    id='mood-field'
                >
                    <option value="comfort">Hangry</option>
                    <option value="healthy">Feeling good</option>
                </select>
            </label>

            <label htmlFor="time-field">
            <p>How much time do you have to cook?</p>
            <select
                value={selectedTime}
                onChange={(e) => setSelectedTime(e.target.value)}
                id='time-field'
            >
                <option value="20">Less than 20 minutes</option>
                <option value="20+">More than 20 minutes</option>
            </select>
            </label>

            <label htmlFor="motivation-field">
            <p>Are you feeling like a chef today?</p>
            <select
                value={selectedMotivation}
                onChange={(e) => setSelectedMotivation(e.target.value)}
                id='motivation-field'
            >
                <option value="5">Not at all</option>
                <option value="5+">Hell yeah!</option>
            </select>
            </label>

            <div>
                <Button
                    className='recipe-button'
                    type='button'
                    onClick={fetchData}
                    text='Show me a recipe!'
                />
            </div>
</div>
)
}

export default Homepage;