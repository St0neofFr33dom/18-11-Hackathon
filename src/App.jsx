import { useState } from 'react';
import Map from './map';
import.meta.env;
import './App.css';
import { Wrapper, Status } from '@googlemaps/react-wrapper';

function App() {
  const render = (status) => {
    return <h1>{status}</h1>;
  };

  return (
    <div className='App'>
      <Wrapper apiKey={import.meta.env.VITE_SECRET} render={render}>
        <Map />
      </Wrapper>
    </div>
  );
}

export default App;
