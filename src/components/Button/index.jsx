import React from 'react'
import styles from "./Button.module.css"

function Button ({text,func}) {
    return (
        <div className={styles.button} onClick={func}>
            {text}
        </div>
    )
}

export default Button