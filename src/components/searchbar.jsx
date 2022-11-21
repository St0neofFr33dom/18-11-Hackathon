import { useState } from 'react';
function Searchbar({ setSearchCoordinates }) {
    const [searchValue, setSearchValue] = useState('');
    let postcodeRegex = /^([a-zA-Z]{1,2}[a-zA-Z\d]{1,2})\s?(\d[a-zA-Z]{2})$/

    async function getRequest() {
        let url = '';
        if(postcodeRegex.test(searchValue)){
            url = `https://api.postcodes.io/postcodes/${searchValue}`
            let response = await fetch(url);
            let data = await response.json();
            console.log(data);
            setSearchValue('');
            setSearchCoordinates({ lat: data.result.latitude, lng: data.result.longitude });
        }
        else {
            url = `http://api.openweathermap.org/geo/1.0/direct?q=${searchValue}&limit=5&appid=${
                import.meta.env.VITE_WEATHER_API_KEY
            }`
            let response = await fetch(url);
            let data = await response.json();
            console.log(data);
            setSearchValue('');
            setSearchCoordinates({ lat: data[0].lat, lng: data[0].lon });
        }
    }

    function handleChange(e) {
        setSearchValue(e.target.value);
    }

    function keyPress(e) {
        if (e.keyCode === 13) {
            getRequest();
        }
    }

    return (
        <div>
            <input
                type='text'
                placeholder='city / postcode'
                value={searchValue}
                onChange={handleChange}
                onKeyDown={keyPress}
            />

            <button onClick={getRequest}>Search</button>
        </div>
    );
}

export default Searchbar;
