import React from 'react';
import cyLogo from '../../assets/community_yard-logo.svg';
import { useState, useEffect, useRef, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationCrosshairs } from '@fortawesome/free-solid-svg-icons';
import Searchbar from './Searchbar';
import RadiusSelector from './RadiusSelector';
import styles from './map.module.css';
import getGeolocation from '../../funcs/getGeolocation';
import browserWidthContext from '../../context/browserWidthContext';
// import useBrowserWidth from '../../hooks/useBrowserWidth';

export default function Map({
    children,
    searchCoordinates,
    setSearchCoordinates,
    radius,
    setRadius,
}) {
    const ref = useRef(null);
    const [map, setMap] = useState();

    function handleChange(e) {
        setRadius(e.target.value);
    }
    const desktop = useContext(browserWidthContext);

    useEffect(() => {
        //fetches from the google maps api and renders the map
        if (ref.current && !map) {
            setMap(
                new window.google.maps.Map(ref.current, {
                    center: {
                        lat: searchCoordinates.lat,
                        lng: searchCoordinates.lng,
                    },
                    zoom: 10,
                    disableDefaultUI: true,
                })
            );
        }
    }, [ref, map]);

    useEffect(() => {
        map ? map.setCenter(searchCoordinates) : null;
    }, [searchCoordinates]);

    useEffect(() => {
        // Adds styling to the slider input so that the bar on the left of the slider thumb is coloured in
        for (let e of document.querySelectorAll(
            'input[type="range"].slider-progress'
        )) {
            e.style.setProperty('--value', e.value);
            e.style.setProperty('--min', e.min == '' ? '0' : e.min);
            e.style.setProperty('--max', e.max == '' ? '100' : e.max);
            e.addEventListener('input', () =>
                e.style.setProperty('--value', e.value)
            );
        }
    }, []);

    return (
        <div className={styles.mapBox}>
            <div className={styles.logoSearchContainer}>
                {desktop && <img className={styles.logo} src={cyLogo} />}

                <Searchbar setSearchCoordinates={setSearchCoordinates} />
            </div>
            <FontAwesomeIcon
                className={styles.geoButton}
                icon={faLocationCrosshairs}
                onClick={() => {
                    getGeolocation(setSearchCoordinates);
                }}
            />
            <div id='map' className={styles.map} ref={ref}></div>
            {React.Children.map(children, (child) => {
                if (React.isValidElement(child)) {
                    // set the map prop on the child component
                    // @ts-ignore
                    let element = React.cloneElement(child, { map });
                    return element;
                }
            })}
            <RadiusSelector radius={radius} handleChange={handleChange} />
        </div>
    );
}
