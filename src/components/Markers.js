import React from "react";
import { Marker } from "react-leaflet";
import { IconLocation } from "./IconLocation";

const Markers = () => {
    return (
        <Marker position={{lat: '18.854950638559547', lng: '-97.06669076122935'}} icon={IconLocation}/>
    )
    
}

export default Markers