import { useState } from 'react';
import { getRequest } from '../funcs/getRequest.jsx';
function Searchbar({ setSearchCoordinates }) {
    const [searchValue, setSearchValue] = useState('');
    let postcodeRegex = /^([a-zA-Z]{1,2}[a-zA-Z\d]{1,2})\s?(\d[a-zA-Z]{2})$/;

    async function findCoordinates() {
        let coordinates = await getRequest(searchValue);
        setSearchCoordinates(coordinates);
        setSearchValue('');
    }

    function handleChange(e) {
        setSearchValue(e.target.value);
    }

    function keyPress(e) {
        if (e.keyCode === 13) {
            findCoordinates();
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

            <button onClick={findCoordinates}>Search</button>
        </div>
    );
}

export default Searchbar;
