import { useEffect, useState, useRef, useContext } from 'react';
import Map from '../../components/Map';
import.meta.env;
import Marker from '../../components/Map/Marker';
import InfoBox from '../../components/InfoBox';
import MileRadius from '../../components/Map/MileRadius/index.jsx';
import { Wrapper, Status } from '@googlemaps/react-wrapper';
import { dummyData } from '../../data/dummdata.js';
import getGeolocation from '../../funcs/getGeolocation';
import styles from './MapPage.module.css';
import browserWidthContext from '../../context/browserWidthContext';
import LoginButton from '../../components/LoginButton';
import LogoutButton from '../../components/LogoutButton';

function MapPage({ foodBanks }) {
    const [radius, setRadius] = useState(10);

    const desktop = useContext(browserWidthContext);

    const [searchCoordinates, setSearchCoordinates] = useState({
        lat: 51.509865,
        lng: -0.118092,
    });

    //when a marker is clicked, sets the 'place' attribute to correspond to the currently clicked location
    const [displayedData, setDisplayedData] = useState();

    function logCoord() {
        console.log(searchCoordinates);
    }

    const render = (status) => {
        return <h1>{status}</h1>;
    };

    async function testFunction() {
        getGeolocation(setSearchCoordinates);
        return;
    }

    return (
        <>
            <LoginButton />
            <LogoutButton />
            <div
                className={` ${styles.mapContainer} ${
                    desktop ? styles.desktopMapContainer : ''
                }`}
            >
                <Wrapper apiKey={import.meta.env.VITE_SECRET} render={render}>
                    <Map
                        searchCoordinates={searchCoordinates}
                        setSearchCoordinates={setSearchCoordinates}
                        radius={radius}
                        setRadius={setRadius}
                    >
                        {/* can only map through foodBanks after async fetch so checks if it exists before trying to map using && */}
                        {foodBanks &&
                            foodBanks.map((place, index) => {
                                return (
                                    <Marker
                                        key={index}
                                        position={{
                                            lat: place.lat,
                                            lng: place.lng,
                                        }}
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
                            fillColor='#0F0'
                            cursor={null}
                        />
                    </Map>
                </Wrapper>
                {/* <SearchBar setSearchCoordinates={setSearchCoordinates} /> */}
                {foodBanks && <InfoBox props={displayedData} />}

                {/* <Form locations={locations} setLocations={setLocations} /> */}
            </div>
        </>
    );
}

export default MapPage;
