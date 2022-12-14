import cyLogo from "../../assets/community_yard-logo.svg";
import React from 'react'
import styles from "./LoginPage.module.css"
import Button from '../../components/Button'

function LoginPage () {
    return (
        <main className={styles.loginPage}>
            <div className={styles.backgroundFilter}> 
            <img class={styles.logo} src={cyLogo}/>
                {/* <Logo /> */}
                <p className={styles.tagline}>connecting your community with foodbanks</p>
                <div className={styles.inputFields}>
                    <input placeholder='email'/>
                    <input placeholder='password'/>
                </div>
                <a>forgotten password?</a>
                <div className={styles.buttonGroup}>
                    <Button text="login" func={()=>{console.log("Hi")}} />
                    <Button text="continue as guest" func={()=>{console.log("Hi")}} />
                </div>
                <p className={styles.createAccount}>don't have an account? <a>sign up here</a></p>
            </div>
        </main>
    )
}

export default LoginPage