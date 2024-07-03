import React from 'react'
import { Marker, Popup } from 'react-leaflet';
import '../../Assets/CSS/Pin.scss';
import { Link } from 'react-router-dom';


function DetailPin({longitude, latitude, image}) {
  return (
    <Marker position={[latitude, longitude]}>
        <Popup>
            <div className='pup_container'>
                <img src={image} alt="" />

                {/* <div className='text_container'>
                    <Link to={`${item.slug}`}>{item.title}</Link>
                    <span className='bed'>{item.bedrooms} bedroom</span>
                    <span className='price'><small>$</small> {item.price}</span>
                </div> */}
            </div>
        </Popup>
    </Marker>
  )
}

export default DetailPin