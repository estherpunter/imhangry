import {useForm} from "react-hook-form";
import {useContext, useState} from "react";
import axios from "axios";
import {AuthContext} from "../../context/AuthContext.jsx";

function SignInPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, toggleError] = useState(false);
    const [loading, toggleLoading] = useState(false);

    const {login, token} = useContext(AuthContext);

    const {register} = useForm();

    async function handleSubmit(e) {
        e.preventDefault();
        toggleError(false);
        toggleLoading(true);

        try {
            const response = await axios.post('https://frontend-educational-backend.herokuapp.com/api/auth/signin', {
                    username: username,
                    password: password,
                }, {
                    headers: {
                        "Content-Type": 'application/json',
                        Authorization: `Bearer ${token}`,
                    }
                }
            );
            login(response.data.accessToken)
        } catch (e) {
            console.error(e);
            toggleError(true);
        }

    }


    return (
        <>
            <h1>Sign in</h1>

            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username-field">
                        <p>Username</p>
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
                </div>

                {error && <p className="error">Wrong username and password combination.</p>}

                <button type="submit">
                    Sign in
                </button>
                {loading && <p className="loading">Loading...</p>}
            </form>
        </>
    )
}

export default SignInPage;