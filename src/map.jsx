import React from 'react';
import { useState, useEffect, useRef } from 'react';
import Searchbar from './components/searchbar.jsx';
import RadiusSelector from './components/RadiusSelector.jsx';
import './map.css';

export default function Map({
    children,
    searchCoordinates,
    setSearchCoordinates,
    radius,
    setRadius
}) {
    const ref = useRef(null);
    const [map, setMap] = useState();

    function handleChange(e) {
        setRadius(e.target.value);
    }


    useEffect(() => {
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

    useEffect(()=>{
        for (let e of document.querySelectorAll('input[type="range"].slider-progress')) {
            e.style.setProperty('--value', e.value);
            e.style.setProperty('--min', e.min == '' ? '0' : e.min);
            e.style.setProperty('--max', e.max == '' ? '100' : e.max);
            e.addEventListener('input', () => e.style.setProperty('--value', e.value));
          }
    },[])
    
    return (
        <div className='mapBox'>
            <Searchbar setSearchCoordinates={setSearchCoordinates} />
            <div id='map' ref={ref}></div>
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
