import './Label.css'

function Label({htmlText, question, value, onChange, id, optionValue1, optionValue2, optionText1, optionText2}) {
    return (
        <label htmlFor={htmlText}>
            <p>{question}</p>
            <select
                value={value}
                onChange={onChange}
                id={id}
                className="select-field"
            >
                <option value={optionValue1}>{optionText1}</option>
                <option value={optionValue2}>{optionText2}</option>
            </select>
        </label>
    )
}

export default Label;