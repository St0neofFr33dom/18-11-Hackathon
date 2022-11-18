import { useState } from 'react';
import Map from './map';
import.meta.env;
import './App.css';
import Marker from './marker';
import SearchBar from './components/searchbar';
import { Wrapper, Status } from '@googlemaps/react-wrapper';
import { foodBanks } from './dummdata.js';

function App() {
  const render = (status) => {
    return <h1>{status}</h1>;
  };

  return (
    <div className='App'>
      <Wrapper apiKey={import.meta.env.VITE_SECRET} render={render}>
        <Map>
          {foodBanks.map((place, index) => {
            return <Marker key={index} position={{ lat: place.lat, lng: place.lng }} />;
          })}
        </Map>
      </Wrapper>
      <SearchBar />
    </div>
  );
}

export default App;
