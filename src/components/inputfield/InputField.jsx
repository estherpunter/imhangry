import './InputField.css';

function InputField({text, id, register, placeholder, value, onChange}) {
    return (
        <input
            type={text}
            id={id}
            {...register(id)}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
        />
    )
}


export default InputField;