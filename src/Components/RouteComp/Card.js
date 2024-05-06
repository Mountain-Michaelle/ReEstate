import React from 'react'
import {Link} from 'react-router-dom';
import '../../Assets/CSS/Card.scss';
import {Button, ListItemButton} from '@mui/material';
import Typography from '@mui/material/Typography'
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined';
import DirectionsCarFilledOutlinedIcon from '@mui/icons-material/DirectionsCarFilledOutlined';
import BedOutlinedIcon from '@mui/icons-material/BedOutlined';
import BedroomChildOutlinedIcon from '@mui/icons-material/BedroomChildOutlined';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

function Card({key, item}) {
    const {title, address, main_image, price, slug, bathroom } = item

    const numberWithCommas = (x) => {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }
    const prize = numberWithCommas(price)
    

  return (
    <div className='card'>
        <Link to={`${item.slug}`} className='img_container'>
            <img src={`${process.env.REACT_APP_ENDPOINT_URL}${main_image}`} alt="" />
        </Link>

        <div className='text_container'>
            <div className='header'> <span><FmdGoodOutlinedIcon/></span>{item.address}</div>
            <h1>{title}</h1>
            <h2><small>$</small>{prize}</h2>

            <div className='bottom'>
                <div className='bottom_left'>
                    <Button className='btn' startIcon={<BedOutlinedIcon />} variant='outlined' color='warning' size='small'><b>{item.bedrooms} Bedroom</b></Button>
                    <Button className='btn' startIcon={<BedroomChildOutlinedIcon />} variant='outlined' color='warning' size='small'><b>{item.bathroom} Bathroom</b></Button>   
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