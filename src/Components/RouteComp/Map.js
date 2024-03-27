import React from 'react'
import {MapContainer, TileLayer, Popup, Marker } from 'react-leaflet'
import '../../Assets/CSS/Map.scss';
import 'leaflet/dist/leaflet.css';

function Map() {

    const position = [52.4797, -1.90260]


    try{
        
    return (
        <div>
        <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false} className='map'>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[51.505, -0.09]}>
                <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker>
        </MapContainer>
        </div>
    )
    }
    
    catch(error){
        console.log(error)
    }

 
}

export default Map