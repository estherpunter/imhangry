import {Link} from "react-router-dom";
import {useState} from "react";

function SignUpPage() {
    const [termsAndConditionsValue, toggleTermsAndConditionsValue] = useState(false);

    return (
        <>
            <h1>Sign up</h1>
            <form>
                <div>
                    <label htmlFor="email-field">
                        <p>Email address</p>
                        <input
                            type="email"
                            id="email-field"
                            name="email-field"
                            placeholder="Email address"
                        />
                    </label>
                    <label htmlFor="password-field">
                        <p>Password</p>
                        <input
                            type="password"
                            id="password-field"
                            name="password-field"
                            placeholder="Password"
                        />
                    </label>
                </div>
                <label htmlFor="terms-and-conditions">
                    <input
                        type="checkbox"
                        id="terms-and-conditions"
                        name="terms-and-conditions"
                        checked={termsAndConditionsValue}
                        onChange={() => toggleTermsAndConditionsValue(!termsAndConditionsValue)}
                    />
                    <p>I agree with the terms and conditions.</p>
                </label>

                <div>
                    <button type="button">
                        Sign me up!
                    </button>
                </div>
            </form>

            <p>I already have an account, <Link to='/signin'>sign in</Link> instead.</p>
        </>
    )
}

export default SignUpPage;