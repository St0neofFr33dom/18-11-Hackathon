import { useState } from 'react';
function Searchbar() {
    const [searchValue, setSearchValue] = useState('');

    async function getRequest() {
        console.log(import.meta.env.VITE_WEATHER_API_KEY);
        let response = await fetch(
            `http://api.openweathermap.org/geo/1.0/direct?q=${searchValue}&limit=5&appid=${
                import.meta.env.VITE_WEATHER_API_KEY
            }`
        );
        let data = await response.json();
        console.log(data);
        setSearchValue('');
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
