import { Component } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

import axios from 'axios';


export default class Places extends Component {
    state = {
        selected: {},
        setSelected: () => { },
        locations: [],
        defaultCenter: {},
        error: ''
    };


    async componentDidMount() {

        const { lat, lng } = this.props.match.params;

        this.setState({ defaultCenter: { lat: Number(lat), lng: Number(lng) } });

        let config = {
            headers: { "Access-control-allow-origin": '*' }
        };

        await axios.get(`https://google-maps-api-backend.herokuapp.com/api/v1/places/${lat}/${lng}`, config)
            .then(response => {
                if (response)
                    this.setState({ locations: response.data });
                else
                    throw new Error();
            })
            .catch(error => {
                this.setState({ error: 'Desulpe algo deu errado tente novamente!' })
            });
    }


    render() {

        let { selected, setSelected, locations, defaultCenter, error } = this.state;

        const mapStyles = {
            height: "50vh",
            width: "100%",
        };

        const onSelect = item => {
            setSelected(item);
            const { name } = item;

            var btn = document.createElement("H5");   // Create a <button> element
            btn.innerHTML += name;                   // Insert text
            document.body.appendChild(btn);

            // document.getElementById("name_location").innerHTML += name;
        }

        return (
            <div>
                {!error ?
                    <LoadScript
                        googleMapsApiKey='AIzaSyBXjOchbRJ8GO8RYOUyCnNDPxclQbFzPv4'>
                        <GoogleMap
                            mapContainerStyle={mapStyles}
                            zoom={13}
                            center={defaultCenter}>
                            {
                                locations.map((item, keys) => {
                                    return (
                                        <Marker key={keys}
                                            position={item.location}
                                            onClick={() => onSelect(item)}
                                        />
                                    )
                                })
                            }

                        </GoogleMap>

                        {/* user Ratings */}
                        <div style={{
                            boxShadow: "10px 10px 10px 5px #0000",
                            backgroundColor: "blue",
                            width: "100%",
                            height: "auto",
                            display: "inline-block"
                        }}>
                            <span id="name_location" style={{ marginTop: "90px" }}>{ }</span>
                        </div>

                    </LoadScript>
                    :
                    <h1>{error}</h1>
                }

            </div>
        )

    }

}
