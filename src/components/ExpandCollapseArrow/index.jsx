import React from 'react'
import arrow from '../../assets/arrows.svg';
import styles from './ExpandCollapseArrow.module.css'

function ExpandCollapseArrow ({state, setState}) {
    return (
        <div className={styles.container}>
        {state && <p>hide</p>}
            <img
                className={`${styles.arrow} ${state ? `${styles.rotateArrow}` : ''}`}
                src={arrow}
                alt='arrow'
                onClick={() => {
                    setState(!state);
                }}
            />
            {!state && <p>details</p>}
        </div>
    )
}

export default ExpandCollapseArrow