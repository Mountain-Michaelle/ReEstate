import React from 'react'
import { Marker, Popup } from 'react-leaflet';
import '../../Assets/CSS/Pin.scss';
import { Link } from 'react-router-dom';


function Pin({item}) {
  return (
    <Marker position={[item.latitude, item.longitude]}>
        <Popup>
            <div className='pup_container'>
                <img src={process.env.REACT_APP_ENDPOINT_URL + item.main_image} alt="" />

                <div className='text_container'>
                    <Link to={`${item.slug}`}>{item.title}</Link>
                    <span className='bed'>{item.bedrooms} bedroom</span>
                    <span className='price'><small>$</small> {item.price}</span>
                </div>
            </div>
        </Popup>
    </Marker>
  )
}

export default Pin