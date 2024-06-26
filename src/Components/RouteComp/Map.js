import React from 'react'
import {MapContainer, TileLayer, Popup, Marker } from 'react-leaflet'
import '../../Assets/CSS/Map.scss';
import 'leaflet/dist/leaflet.css';
import Pin from './Pin';

import L from 'leaflet';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});


function Map({items}) {

    const position = [52.4797, -1.90260]
    try{
        
    return (
        <div>
        <MapContainer center={[6.4599, 	7.54894]} zoom={12} scrollWheelZoom={false} className='map'>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {
                items.map((item, index) => {
                    return(
                       <Pin key={index} item={item} />  
                    )
                })
               
            }
            

        </MapContainer>
        </div>
    )
    }
    catch(error){
        console.log(error)
    }

 
}

export default Map