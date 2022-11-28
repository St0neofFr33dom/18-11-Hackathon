import { useState } from 'react';
import Map from '../map';
import.meta.env;
import '../App.css';
import Marker from '../marker';
import SearchBar from '../components/searchbar';
import InfoBox from '../components/InfoBox';
import Form from '../components/Form';
import MileRadius from '../components/MileRadius.jsx'
import { Wrapper, Status } from '@googlemaps/react-wrapper';
import { foodBanks } from '../dummdata.js';
import { Range } from 'react-range'

function MapPage() {
    const [locations, setLocations] = useState(foodBanks);

    const [radius,setRadius] = useState(10)

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

    function getMarkers() {
        let markers = document.querySelector('#map');
        console.log(markers);
        console.log(markers.children);
    }

    function handleChange(e){
        setRadius(e.target.value)
    }

    return (
        <div className='App'>
            <Wrapper apiKey={import.meta.env.VITE_SECRET} render={render}>
                <Map searchCoordinates={searchCoordinates}>
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
                    <MileRadius center={searchCoordinates} radius={radius*1000} fillColor="#0F0"/>
                </Map>
            </Wrapper>
            <input type="number" value={radius} onChange={handleChange}/>
            <SearchBar setSearchCoordinates={setSearchCoordinates} />
            <InfoBox props={displayedData} />
            <button onClick={logCoord}>Log coord</button>
            <button onClick={getMarkers}>Test</button>

            <Form locations={locations} setLocations={setLocations} />
        </div>
    );
}

export default MapPage;
