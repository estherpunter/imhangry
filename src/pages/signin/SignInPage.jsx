import {useForm} from "react-hook-form";
import {useState} from "react";
import axios from "axios";

function SignInPage() {

    const {register} = useForm();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, toggleError] = useState(false);
    const [loading, toggleLoading] = useState(false);

    async function handleSubmit(e) {
        e.preventDefault();
        toggleError(false);
        toggleLoading(true);

        try {
            const response = await axios.post('https://frontend-educational-backend.herokuapp.com/api/auth/signin', {
                "username": username,
                "password": password,
            });

        } catch (e) {
            console.error(e);
            toggleError(true);
        }

    }


    return (
        <>
            <h1>Sign in</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username-field">
                    <p>Email address</p>
                    <input
                        type="text"
                        id="username-field"
                        {...register("username-field")}
                        placeholder="Username"
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </label>
                <label htmlFor="password-field">
                    <p>Password</p>
                    <input
                        type="password"
                        id="password-field"
                        {...register("password-field")}
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </label>
                {error && <p className="error">Wrong username and password combination.</p>}
                <button
                    type="submit"
                >
                    Sign in
                </button>
                {loading && <p className="loading">Loading...</p>}
            </form>
        </>
    )
}

export default SignInPage;