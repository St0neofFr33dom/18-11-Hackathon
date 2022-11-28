import React from 'react'
import "./LoginPage.css"
import Logo from '../components/Logo'
import Button from '../components/Button'

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
                <div className="button-group">
                    <Button text="login" func={()=>{console.log("Hi")}} />
                    <Button text="continue as guest" func={()=>{console.log("Hi")}} />
                </div>
                <p>don't have an account? <a>sign up here</a></p>
            </div>
        </main>
    )
}

export default LoginPage