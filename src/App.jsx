import { useState, useContext } from 'react';
import LoginPage from './pages/LoginPage';
import MapPage from './pages/MapPage';
import useBrowserWidth from './hooks/useBrowserWidth';
import browserWidthContext from './context/browserWidthContext';

function App() {
    //custom hook to determine screen size (stored in useContext)
    const desktop = useBrowserWidth(800);
    return (
        <browserWidthContext.Provider value={desktop}>
            <MapPage />
            {/* <LoginPage /> */}
        </browserWidthContext.Provider>
    );
}

export default App;
