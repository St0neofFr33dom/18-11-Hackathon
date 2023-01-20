
import { useEffect, useState } from 'react';
import { Wrapper, Status } from "@googlemaps/react-wrapper"

import LoginPage from './pages/LoginPage';
import MapPage from './pages/MapPage';
import useBrowserWidth from './hooks/useBrowserWidth';
import browserWidthContext from './context/browserWidthContext';
import SplashScreen from './pages/SplashPage/SplashScreen';

function App() {

    /*
        Make a get request to server for foodbanks
        Consider the time it takes for the get request and the google map api request.

        if requests are successful render the return with all the pages below, if not console error
    */
    const [foodBanks, setFoodBanks] = useState();
    useEffect(() => {
        // GET request using fetch inside useEffect React hook

        async function getFoodBanks() {
            const response = await fetch('http://localhost:3000/foodbanks');
            const data = await response.json(response);
            // console.log(data);
            setFoodBanks(data.payload);
        }

        getFoodBanks();
        // empty dependency array means this effect will only run once (like componentDidMount in classes)
    }, []);

    //custom hook to determine screen size (stored in useContext)
    const desktop = useBrowserWidth(800);

    return (
        <browserWidthContext.Provider value={desktop}>
            <MapPage foodBanks={foodBanks} />
            {/* <LoginPage /> */}
        </browserWidthContext.Provider>
    );
}

export default App;
