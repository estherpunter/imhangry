import {Link} from "react-router-dom";
import {useState} from "react";
import './SignUpPage.css';
import axios from "axios";
import {useForm} from "react-hook-form";


function SignUpPage() {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const {register} = useForm();

    const [error, toggleError] = useState(false);
    const [loading, toggleLoading] = useState(false);

    async function handleSubmit(e) {
        e.preventDefault(e);
        toggleError(false);
        toggleLoading(true);

        try {
            const response = await axios.post('https://frontend-educational-backend.herokuapp.com/api/auth/signup',
                {
                    "username": username,
                    "email": email,
                    "password": password,
                    "role": ["user"],
                }, {
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": "Bearer xxx.xxx.xxx",
                    }
                }
            )
            console.log(response)
        } catch (e) {
            console.error(e);
            toggleError(true);
        }

        toggleLoading(false);
    }


    return (
        <>
            <h1>Sign up</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username-field">
                        <p>Username</p>
                        <input
                            type="text"
                            id="username-field"
                            {...register("username")}
                            placeholder="Username"
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </label>
                    <label htmlFor="email-field">
                        <p>Email address</p>
                        <input
                            type="email"
                            id="email-field"
                            {...register("email")}
                            placeholder="Email address"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </label>
                    <label htmlFor="password-field">
                        <p>Password</p>
                        <input
                            type="password"
                            id="password-field"
                            {...register("password")}
                            placeholder="Password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </label>
                </div>

                {error && <p className="error">There is already an account with this username. Please try again. </p>}

                <div>
                    <button
                        type="submit"
                        disabled={loading}
                    >
                        Sign me up!
                    </button>
                </div>
            </form>

            <p>I already have an account, <Link to='/signin'>sign in</Link> instead.</p>
        </>
    )
}

export default SignUpPage;