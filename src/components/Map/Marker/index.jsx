import { useState, useEffect } from 'react';

export default function Marker(options) {
    const [marker, setMarker] = useState();
    useEffect(() => {
        if (!marker) {
            setMarker(new google.maps.Marker());
        }
        // remove marker from map on unmount
        return () => {
            if (marker) {
                marker.setMap(null);
            }
        };
    }, [marker]);
    //if there is a marker and it is clicked, carry out the setState function in the parent component(MapPage/index) to set the
    //infoBox 'place' to be this current location
    useEffect(() => {
        if (marker) {
            marker.addListener('click', options.setState);
            marker.setOptions(options);
        }
    }, [marker, options]);
    return null;
}
