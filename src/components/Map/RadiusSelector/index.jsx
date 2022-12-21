import React, { useContext } from 'react';
import browserWidthContext from '../../../context/browserWidthContext';
import styles from './RadiusSelector.module.css';

function RadiusSelector({ radius, handleChange }) {

    const desktop = useContext(browserWidthContext)
    return (
        <div className={`${styles.radiusSelector} ${desktop ? styles.desktopRadiusSelector : ''}`}>
            {/* <h4 className={styles.label}>Mile Radius</h4> */}
            <input
                id={styles.slider1}
                type='range'
                value={radius}
                min={0}
                max={25}
                step={0.5}
                onChange={handleChange}
                className='slider slider-progress'
            />
            <div className={styles.kilometers}>
                <p>0km</p>
                <p>5km</p>
                <p>10km</p>
                <p>15km</p>
                <p>20km</p>
                <p>25km</p>
            </div>
        </div>
    );
}

export default RadiusSelector;
