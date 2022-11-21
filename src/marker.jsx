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

  useEffect(() => {
    if (marker) {
      marker.addListener("click",options.setState)
      marker.setOptions(options);
    }
  }, [marker, options]);
  return null;
}
