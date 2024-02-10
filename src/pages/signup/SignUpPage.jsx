import {Link, useNavigate} from "react-router-dom";
import {useState} from "react";
import './SignUpPage.css';
import axios from "axios";
import {useForm} from "react-hook-form";
import Button from "../../components/button/Button.jsx";
import InputField from "../../components/inputfield/InputField.jsx";


function SignUpPage() {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, toggleError] = useState(false);
    const [loading, toggleLoading] = useState(false);

    const {register} = useForm();

    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault(e);
        toggleError(false);
        toggleLoading(true);

        try {
            await axios.post("https://frontend-educational-backend.herokuapp.com/api/auth/signup", {
                username: username, email: email, password: password, role: ["user"],
            });
            navigate('/signin')
        } catch (e) {
            console.error(e);
            toggleError(true);
        } finally {
            toggleLoading(false);
        }
    }

    return (<>
            <main>
                <h1>Sign up</h1>
                <form className='sign-up-form'>
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
                        <label htmlFor="email-field">
                            <p>Email address</p>
                            <InputField
                                type="email"
                                id="email-field"
                                register={register}
                                placeholder="Email address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
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

                    {error && <p className="error">Username and password invalid, please try again.</p>}

                    <div>
                        <Button
                            className='form-button'
                            type='submit'
                            onClick={handleSubmit}
                            text='Sign me up!'
                        />

                        {loading && <p>Loading...</p>}

                    </div>
                </form>
            </main>
            <section>
                <p>I already have an account, <Link to='/signin'>sign in</Link> instead.</p>
            </section>

            {error && <p className="error">Something went wrong with loading the page</p>}
            {loading && <p className="loading">Loading...</p>}


        </>)
}

export default SignUpPage;