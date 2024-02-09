import {useForm} from "react-hook-form";
import {useContext, useState} from "react";
import axios from "axios";
import {AuthContext} from "../../context/AuthContext.jsx";
import Button from "../../components/button/Button.jsx";
import './SignInPage.css';
import InputField from "../../components/inputfield/InputField.jsx";

function SignInPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, toggleError] = useState(false);
    const [loading, toggleLoading] = useState(false);

    const {login} = useContext(AuthContext);

    const {register} = useForm();

    async function handleSubmit(e) {
        e.preventDefault();
        toggleError(false);
        toggleLoading(true);

        try {
            const response = await axios.post("https://frontend-educational-backend.herokuapp.com/api/auth/signin", {
                    username: username,
                    password: password,
                }
            );
            login(response.data.accessToken)
        } catch (e) {
            console.error(e);
            toggleError(true);
        }

        toggleLoading(false);

    }

    return (
        <>
            <main>
                <h1>Sign in</h1>
                <form className='sign-in-form'>
                    <div>
                        <label htmlFor="username-field">
                            <p>Username</p>
                            <InputField
                                type="text"
                                id="username-field"
                                register={register}
                                placeholder="Username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </label>
                        <label htmlFor="password-field">
                            <p>Password</p>
                            <InputField
                                type="password"
                                id="password-field"
                                register={register}
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </label>
                    </div>

                    {error && <p className="error">Wrong username and password combination.</p>}

                    <Button
                        className='form-button'
                        type="submit"
                        onClick={handleSubmit}
                        text='Sign me in!'
                    />

                    {loading && <p className="loading">Loading...</p>}

                </form>
            </main>
        </>
    )
}

export default SignInPage;