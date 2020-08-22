import React from 'react';
import { Form, Field } from 'react-final-form';
import './Login.css';

function onSubmit() {

}

function validate() {

}

function Login() {
    return (
        <div className="login-container display-flex flex-column justify-space-center align-items-center">
            <div className="login">
                <div className="mr-b20 fw700 text-center">Login</div>
                <Form
                    onSubmit={onSubmit}
                    validate={validate}
                    render={({ handleSubmit }) => (
                        <form onSubmit={handleSubmit}>
                            <Field name="email">
                                {({ input, meta }) => (
                                    <div className="mr-b20">
                                        <input className="input-field outline-none" type="email" {...input} placeholder="Email" />
                                        {meta.touched && meta.error && <span>{meta.error}</span>}
                                    </div>
                                )}
                            </Field>
                            <Field name="password">
                                {({ input, meta }) => (
                                    <div className="mr-b20">
                                        <input className="input-field outline-none" type="password" {...input} placeholder="Password" />
                                        {meta.touched && meta.error && <span>{meta.error}</span>}
                                    </div>
                                )}
                            </Field>
                            <label className="mr-b20 inline-block cursor-pointer">
                                <Field name="rememberLogin">
                                    {({ input, meta }) => (
                                        <span>
                                            <input className="cursor-pointer" type="checkbox" {...input} />
                                            {meta.touched && meta.error && <span>{meta.error}</span>}
                                        </span>
                                    )}
                                </Field>
                                <span className="pd-l4 fs14 text-top">Remember me</span>
                            </label>
                            <button className="w100 color-white cursor-pointer submit-btn outline-none" type="submit">Login</button>
                        </form>
                    )}
                />
                <div className="signup-text cursor-pointer">Don't have an account? Sign up here</div>
            </div>
        </div >
    );
}

export default Login;