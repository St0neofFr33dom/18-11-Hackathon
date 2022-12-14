export default async function getGeolocation(setState){
    let object
    if ("geolocation" in navigator) {

       navigator.geolocation.getCurrentPosition(function(position) {
            object = {lat:position.coords.latitude, lng: position.coords.longitude}
            setState(object)
          },function(error){alert("Error Code = " + error.code + " - " + error.message)})
return
;
      } else {
        alert("Error - Can't access geolocation within this browser")
      }
}