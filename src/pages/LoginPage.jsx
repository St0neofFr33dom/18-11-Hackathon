import React from 'react'
import "./LoginPage.css"
import Logo from '../components/Logo'

function LoginPage () {
    return (
        <main className="login-page">
            <div className="background-filter"> 
                <Logo />
                <p>connecting your community with foodbanks</p>
                <div className="input-fields">
                <input placeholder='email'/>
                <input placeholder='password'/>
                </div>
                <a>forgotten password?</a>
            </div>
        </main>
    )
}

export default LoginPage