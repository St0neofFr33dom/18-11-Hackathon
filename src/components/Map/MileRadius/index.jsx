import React from 'react'

// function MileRadius (){
//     const cityCircle = new google.maps.Circle({
//         strokeColor: "#FF0000",
//         strokeOpacity: 0.8,
//         strokeWeight: 2,
//         fillColor: "#FF0000",
//         fillOpacity: 0.35,
//         map,
//         center: citymap[city].center,
//         radius: Math.sqrt(citymap[city].population) * 100,
//       });
//     return (
//         <div>
            
//         </div>
//     )
// }

// export default MileRadius

const MileRadius = (options) => {
    const [radius, setRadius] = React.useState();
  
    React.useEffect(() => {
      if (!radius) {
        setRadius(new google.maps.Circle());
      }
  
      // remove marker from map on unmount
      return () => {
        if (radius) {
          radius.setMap(null);
        }
      };
    }, [radius]);
    React.useEffect(() => {
      if (radius) {
        radius.setOptions(options);
      }
    }, [radius, options]);
    return null;
  };

  export default MileRadius