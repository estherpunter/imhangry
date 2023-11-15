function EmptyTheFridge() {
    return (
        <>
            <div>
                <h1>Empty the fridge</h1>
                <p>What ingredients do you want to use?</p>
                <input
                    type="search"
                    id="ingredient-field"
                    name="ingredient-field"
                />
            </div>
            <div>
                <button type="button">
                    Show me a recipe!
                </button>
            </div>
        </>
    )
}

export default EmptyTheFridge;