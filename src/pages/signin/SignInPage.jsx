import {useState} from "react";

function SignInPage() {
    return (
        <>
            <h1>Sign in</h1>
            <form>
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
            </form>
        </>
    )
}

export default SignInPage;