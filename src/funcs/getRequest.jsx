export async function getRequest(searchValue) {
    let postcodeRegex = /^([a-zA-Z]{1,2}[a-zA-Z\d]{1,2})\s?(\d[a-zA-Z]{2})$/;
    let url = '';
    if (postcodeRegex.test(searchValue)) {
        console.log('post code attempt');
        url = `https://api.postcodes.io/postcodes/${searchValue}`;
        let response = await fetch(url);
        if(response.ok === false) {
            alert('invalid postcode')
            return
        }
        console.log(response);
        let data = await response.json();
        console.log(data);
        let returnObject = {
            lat: data.result.latitude,
            lng: data.result.longitude,
        };
        return returnObject;
    } else {
        url = `http://api.openweathermap.org/geo/1.0/direct?q=${searchValue}&limit=5&appid=${
            import.meta.env.VITE_WEATHER_API_KEY
        }`;
        let response = await fetch(url);
        let data = await response.json();
        console.log(data);
        let returnObject = { lat: data[0].lat, lng: data[0].lon };
        return returnObject;
    }
}
