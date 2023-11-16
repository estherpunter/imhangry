import {Link} from "react-router-dom";
import {useState} from "react";
import './SignUpPage.css';
import axios from "axios";
import {useForm} from "react-hook-form";


function SignUpPage() {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('');

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
                "role": [role],
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
                <span>
                    <p>Sign up as</p>
                    <label htmlFor="user-role">
                        <input
                            type="checkbox"
                            id="user-role"
                            {...register("user")}
                            value='User'
                            onChange={() => setRole('user')}
                        />
                        <p>User</p>
                    </label>
                    <label htmlFor="admin-role">
                        <input
                            type="checkbox"
                            id="admin-role"
                            {...register("admin")}
                            value='Admin'
                            onChange={() => setRole('admin')}
                        />
                        <p>Admin</p>
                    </label>
                    {error && <p className="error">There is already an account with this username. Please try again. </p>}
                </span>
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