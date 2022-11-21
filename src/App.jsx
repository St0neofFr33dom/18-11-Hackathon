import { useState } from 'react';
import Map from './map';
import.meta.env;
import './App.css';
import Marker from './marker';
import SearchBar from './components/searchbar';
import { Wrapper, Status } from '@googlemaps/react-wrapper';
import { foodBanks } from './dummdata.js';

function App() {
    const [searchCoordinates, setSearchCoordinates] = useState({
        lat: 51.509865,
        lng: -0.118092,
    });

    function logCoord() {
        console.log(searchCoordinates);
    }

    const render = (status) => {
        return <h1>{status}</h1>;
    };

    return (
        <div className='App'>
            <Wrapper apiKey={import.meta.env.VITE_SECRET} render={render}>
                <Map searchCoordinates={searchCoordinates}>
                    {foodBanks.map((place, index) => {
                        return (
                            <Marker
                                key={index}
                                position={searchCoordinates}
                                searchCoordinates={searchCoordinates}
                            />
                        );
                    })}
                </Map>
            </Wrapper>
            <SearchBar setSearchCoordinates={setSearchCoordinates} />
            <button onClick={logCoord}>Log coord</button>
        </div>
    );
}

export default App;
