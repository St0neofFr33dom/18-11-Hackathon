import { useState, useContext, useEffect } from 'react';
import LoginPage from './pages/LoginPage';
import MapPage from './pages/MapPage';
import useBrowserWidth from './hooks/useBrowserWidth';
import browserWidthContext from './context/browserWidthContext';

function App() {

    let desktop = useBrowserWidth(800);
    
    return (
        <browserWidthContext.Provider value={desktop}>
            <MapPage />
            {/* <LoginPage /> */}
        </browserWidthContext.Provider>
    );
}

export default App;
