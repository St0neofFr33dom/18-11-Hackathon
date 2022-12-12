export default async function getGeolocation(setState){
    let object
    if ("geolocation" in navigator) {
       navigator.geolocation.getCurrentPosition(function(position) {
            object = {lat:position.coords.latitude, lng: position.coords.longitude}
            setState(object)
          })
return
;
      } else {
        console.log("Not Available");
      }
}