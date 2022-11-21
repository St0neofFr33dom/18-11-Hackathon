import React from 'react';
import { useState, useEffect, useRef } from 'react';
import './map.css';

export default function Map({ children, searchCoordinates }) {
    const ref = useRef(null);
    const [map, setMap] = useState();

    useEffect(() => {
        if (ref.current && !map) {
            setMap(
                new window.google.maps.Map(ref.current, {
                    center: {
                        lat: searchCoordinates.lat,
                        lng: searchCoordinates.lng,
                    },
                    zoom: 10,
                })
            );
        }
    }, [ref, map]);

    useEffect(() => {
        map ? map.setCenter(searchCoordinates) : null;
    }, [searchCoordinates]);
    return (
        <>
            <div id='map' ref={ref}></div>
            {React.Children.map(children, (child) => {
                if (React.isValidElement(child)) {
                    // set the map prop on the child component
                    // @ts-ignore
                    let element = React.cloneElement(child, { map });
                    return element
                }
            })}
        </>
    );
}
