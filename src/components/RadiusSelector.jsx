import React from 'react'
import styles from "./RadiusSelector.module.css"

function RadiusSelector  ({radius, handleChange}) {
    return (
        <div className={styles.radiusSelector}>
        <h4 className={styles.label}>Mile Radius</h4>
                <input type='range' value={radius} max={25} step={0.5} onChange={handleChange} className={styles.slider} />
                <h4 className={styles.label}>Hello World</h4>
        </div>
    )
}

export default RadiusSelector