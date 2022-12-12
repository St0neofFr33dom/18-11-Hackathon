import React from 'react'
import "./Button.css"

function Button ({text,func}) {
    return (
        <div className="button" onClick={func}>
            {text}
        </div>
    )
}

export default Button