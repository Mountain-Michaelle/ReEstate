import React from 'react'
import {Link} from 'react-router-dom';
import '../../Assets/CSS/Card.scss';
import Typography from '@mui/material/Typography'
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined';
import DirectionsCarFilledOutlinedIcon from '@mui/icons-material/DirectionsCarFilledOutlined';
import BedOutlinedIcon from '@mui/icons-material/BedOutlined';
import BedroomChildOutlinedIcon from '@mui/icons-material/BedroomChildOutlined';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

function Card({key, item}) {
  return (
    <div className='card'>
        <Link to='' className='img_container'><img src={item.img} alt="" /></Link>

        <div className='text_container'>
            <div className='header'> <span><FmdGoodOutlinedIcon/></span>{item.address}</div>

            <h2><small>$</small>{item.price}</h2>

            <div className='bottom'>
                <div className='bottom_left'>
                    <span className='btn'> <span><BedOutlinedIcon /></span><b>{item.bedrooms} Bedroom</b></span>
                    <span className='btn'> <span><BedroomChildOutlinedIcon /></span><b>{item.bathroom} Bathroom</b></span>   
                </div>

                <div className='bottom_right'>
                    <span className='btn bg'><BookmarkBorderIcon /></span>
                    <span className='btn bg'><ForumOutlinedIcon /></span>   
                </div>
            </div>
        </div>
    </div>
  )
}

export default Card