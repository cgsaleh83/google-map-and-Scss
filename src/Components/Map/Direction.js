import React, { useState } from 'react'
import { DirectionsRenderer, DirectionsService, GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
    width: '50%',
    height: '400px',
    marginTop: '40px'
};

const location = {
    lat: 23.733348,
    lng: 90.406707

};


function Direction(origin, destination) {
    const [directionResponse, setDirectionResponse] = useState(null);
    return (
        <LoadScript
            googleMapsApiKey="AIzaSyC5fJQl9R7hqxOKyZwLUbRNKL9iRI-jwhw"
        >
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={location}
                zoom={12}
            >

              {
                    origin !== '' && destination !== '' && <DirectionsService
                        // required
                        options={{
                            destination: destination,
                            origin: origin,
                            travelMode: 'DRIVING'
                        }}
                        // required
                        callback={res => {
                            if (res !== null) {
                                setDirectionResponse(res)
                            }
                        }}

                    />
              }

                {
                    directionResponse && <DirectionsRenderer
                        // required
                        options={{
                            directions: directionResponse
                        }}
                    />
                }
            </GoogleMap>
        </LoadScript>
    )
}

export default React.memo(Direction)