import React from 'react';
import { useState, useEffect, useRef } from 'react';
import './map.css';

export default function Map() {
  const ref = useRef(null);
  const [map, setMap] = useState();

  useEffect(() => {
    if (ref.current && !map) {
      setMap(
        new window.google.maps.Map(ref.current, {
          center: { lat: 51.509865, lng: -0.118092 },
          zoom: 10,
        })
      );
    }
  }, [ref, map]);
  return <div id='map' ref={ref}></div>;
}
