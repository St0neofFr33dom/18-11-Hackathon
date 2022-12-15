import { useEffect, useState, useRef } from "react";
import Map from "../../components/Map";
import.meta.env;
import Marker from "../../components/Map/Marker";
import InfoBox from "../../components/InfoBox";
import MileRadius from "../../components/Map/MileRadius/index.jsx";
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import { foodBanks } from "../../data/dummdata.js";
import getGeolocation from "../../funcs/getGeolocation";
import styles from "./MapPage.module.css"

function MapPage() {
  const [locations, setLocations] = useState(foodBanks);

  const [radius, setRadius] = useState(10);

  const [searchCoordinates, setSearchCoordinates] = useState({
    lat: 51.509865,
    lng: -0.118092,
  });

  const [displayedData, setDisplayedData] = useState(foodBanks[0]);

  function logCoord() {
    console.log(searchCoordinates);
  }

  const render = (status) => {
    return <h1>{status}</h1>;
  };

  async function testFunction(){
   getGeolocation(setSearchCoordinates)
    return
  }

  return (
    <div className={`${styles.mapContainer} mapContainer`}>
      <Wrapper apiKey={import.meta.env.VITE_SECRET} render={render}>
        <Map
          searchCoordinates={searchCoordinates}
          setSearchCoordinates={setSearchCoordinates}
          radius={radius}
          setRadius={setRadius}
        >
          {locations.map((place, index) => {
            return (
              <Marker
                key={index}
                position={{ lat: place.lat, lng: place.lng }}
                data={place}
                setState={() => {
                  setDisplayedData(place);
                }}
              />
            );
          })}
          <MileRadius
            center={searchCoordinates}
            radius={radius * 1000}
            fillColor="#0F0"
          />
        </Map>
      </Wrapper>
      {/* <SearchBar setSearchCoordinates={setSearchCoordinates} /> */}
      <InfoBox props={displayedData} />

      {/* <Form locations={locations} setLocations={setLocations} /> */}
    </div>
  );
}

export default MapPage;
