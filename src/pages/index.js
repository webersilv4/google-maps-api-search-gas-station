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
        console.log(lat, lng)
        return (
            <div>

                {lat} <br />
                {lng}
            </div>
        );
    }
}




export default MyMap;