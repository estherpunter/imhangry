
function EmptyTheFridge() {

    function addInputField() {
        const container = document.getElementById('inputContainer');
        const newInput = document.createElement('input');
        newInput.type = 'text';
        newInput.name = 'inputField[]';
        container.appendChild(newInput);
        container.insertBefore(newInput, container.firstChild);
    }

    return (
        <>
                <h1>Empty the fridge</h1>
                <p>What ingredient(s) do you want to use?</p>
                <div id="inputContainer">
                <input
                    type="text"
                    id="ingredient-field"
                    name="ingredient-field[]"
                    placeholder="Bijv. banaan"
                />
                <button type="button" onClick={addInputField}>
                    Add ingredient
                </button>
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