import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './TextWithIcon.module.css'

function TextWithIcon ({icon, text}) {
    return (
        <div className={styles.container}>
            <FontAwesomeIcon icon={icon}/>
            <h4>{text}</h4>
        </div>
    )
}

export default TextWithIcon