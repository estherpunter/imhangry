function Homepage() {
    return (
        <div>
            <h1>I'm Hangry</h1>

            <form>
            <p>How do you feel?</p>
            <input
                type="text"
                name="mood-field"
                id="mood-field"
            />
            <p>How much time do you have to cook?</p>
            <input
                type="text"
                name="time-field"
                id="time-field"
            />
            <p>Are you feeling like a chef today?</p>
            <input
                type="text"
                name="chef-field"
                id="chef-field"
            />
                <div>
            <button
                className='form-button'
                type="button">
                Show me a recipe!
            </button>
                </div>
            </form>
        </div>
    )
}

export default Homepage;