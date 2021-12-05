import React from "react";


class MyMap extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            lat: 0,
            lng: 0,
        };
    }

    componentWillMount() {
        if (!!navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                this.setState({
                    lat: position.coords.latitude,
                    lng: position.coords.longitude,
                });
            },
                (err) => console.log(err),
                { enableHighAccuracy: true, timeout: 10000, maximumAge: 10000 },
            );
        } else {
            //  // No Support Web
            alert('Seu navegador não suporta geolocalização,')
        }
    }



    render() {

        const { lat, lng } = this.state;


        function handleSubmit(e) {
            e.preventDefault();
            window.location.replace(`/places/${lat}/${lng}`)
        }


        return (
            <div style={{ textAlign: "center" }}>
                <h1>Ver postos de gasolina</h1>
                <button onClick={handleSubmit} style={{
                    backgroundColor: "#2E9AFE",
                    border: "0px",
                    height: "50px",
                    width: "130px",
                    borderRadius: "5px",
                    fontWeight: "bold",
                    cursor: "pointer"
                }}>
                    Ver postos
                </button>
            </div>
        );
    }
}




export default MyMap;