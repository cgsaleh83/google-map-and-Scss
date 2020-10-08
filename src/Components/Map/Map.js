import React from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
    width: '50%',
    height: '800px'
};

const location = {
    lat: 23.43950595,
    lng: 91.19311094
    
};

const onLoad = marker => {
    console.log('marker', marker);
}

function Map() {
    return (
        <LoadScript
            googleMapsApiKey="AIzaSyD3dd56DbsT1nBrfYnxFTJ-2to0b1P1QkU"
        >
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={location}
                zoom={12}
            >
                < Marker onLoad={onLoad}
                    position={location} />
                
            </GoogleMap>
        </LoadScript>
    )
}

export default React.memo(Map)