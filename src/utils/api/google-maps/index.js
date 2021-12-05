import axios from "axios";

// const apiGoogleMaps = axios.create({
//     baseURL: "https://maps.googleapis.com",
//     headers: { 'AccAccess-Control-Allow-Origin': '*' }
// });

function googleMapsApi() {


    var config = {
        method: 'post',
        url: 'https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyBXjOchbRJ8GO8RYOUyCnNDPxclQbFzPv4',
        headers: {}
    };

    axios(config)
        .then(function (response) {
            console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
            console.log(error);
        });

    return (
        <>

            <div id="map" style={{ height: '100%' }}></div>
            {/* {!error ?
                    <h1>Ola</h1> :
                    <h1
                        className="text-center mt-5 pt-5"
                    >Ola</h1>
                } */}
        </>
    );

}
// ?keyword=posto+gasolina&type=gas_station|point_of_interest|establishment&location=-23.39259322694041,-46.318066707530825&radius=1500&key=AIzaSyBXjOchbRJ8GO8RYOUyCnNDPxclQbFzPv4
// apiGoogleMaps.interceptors.request.use(async config => {

//     config.headers.AccessControlAllowOrigin = "http://10.1.1.52:3000";
//     return config;
// });

export default googleMapsApi;