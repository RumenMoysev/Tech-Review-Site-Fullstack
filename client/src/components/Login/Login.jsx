import { useEffect, useState, useContext } from "react";

import { useNavigate } from "react-router-dom"

import { loginService } from "../../api/userService.js";

import "./Login.css"
import AuthContext from "../../contexts/AuthContext.jsx";

export default function Login() {
    const [emailValue, setEmailValue] = useState('')
    const [passwordValue, setPasswordValue] = useState('')
    const [error, setError] = useState(undefined)
    const { auth, loginRegisterSetAuthHandler } = useContext(AuthContext)
    const navigate = useNavigate()

    useEffect(() => {
        if(auth.authToken) {
            setError('You are already logged in')
            setTimeout(() => navigate('/'), 1500)
        }
    }, [auth])

    async function loginHandler(e) {
        e.preventDefault()

        const formData = {
            email: emailValue,
            password: passwordValue
        }

        const response = await loginService(formData)
        const json = await response.json()

        if (!response.ok) {
            return setError(json.message)
        } else {
            setError(undefined)
        }

        loginRegisterSetAuthHandler(json)
        navigate('/')
    }

    function emailValueHandler(e) {
        setEmailValue(e.target.value)
    }

    function passwordValueHandler(e) {
        setPasswordValue(e.target.value)
    }

    return (
        <section id="loginPage" className="hidden loginPage">
            <div className="form-container">
                <div className="formHeaders">
                    <h2>Login</h2>
                    {error && <h4>{error}</h4>}
                </div>
                <form id="loginForm" className="loginForm">
                    <label htmlFor="emailInput">Email</label>
                    <input
                        id="emailInput"
                        className={`good emailInput ${error && 'warning'}`}
                        placeholder="Example: monkey@banana.com"
                        name="email"
                        type="email"
                        value={emailValue}
                        onChange={emailValueHandler}
                        required
                    />
                    <label htmlFor="passwordInput">Password</label>
                    <input
                        id="passwordInput"
                        className={`good passwordInput ${error && 'warning'}`}
                        placeholder="Example: 123abc"
                        name="password"
                        type="password"
                        value={passwordValue}
                        onChange={passwordValueHandler}
                        required
                    />
                    {/* <div className="rememberMe-container">
                        <label
                            htmlFor="logRegCheckbox"
                            className="logRegCheckbox1">
                            Remember me?
                        </label>
                        <input type="checkbox" id="logRegCheckbox" className="logRegCheckbox" />
                    </div> */}
                    <button type="submit" id="buttons" onClick={loginHandler}>
                        Login
                    </button>
                </form>
            </div>
        </section>
    );
}