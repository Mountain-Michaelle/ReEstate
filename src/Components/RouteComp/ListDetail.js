import React from 'react'
import '../../Assets/CSS/ListDetail.scss';
import Slider from './Slider';
import {Button, Typography, IconButton} from '@mui/material';

import { singlePostData, userData} from '../Data/dummyData';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import HandymanOutlinedIcon from '@mui/icons-material/HandymanOutlined';
import PolicyOutlinedIcon from '@mui/icons-material/PolicyOutlined';
import CarRentalOutlinedIcon from '@mui/icons-material/CarRentalOutlined';
import RatioOutlinedIcon from '@mui/icons-material/AspectRatioOutlined';
import BedroomChildOutlinedIcon from '@mui/icons-material/BedroomChildOutlined';
import BathtubOutlinedIcon from '@mui/icons-material/BathtubOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import ChurchOutlinedIcon from '@mui/icons-material/ChurchOutlined';
import AirportShuttleOutlinedIcon from '@mui/icons-material/AirportShuttleOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import Map from './Map';


function ListDetail() {
  return (
    <div className='list_detail'>
        <div className='details'>
            <div className='wrapper'>
                <Slider slideImages={singlePostData.images} />

                <div className='info'>
                    <div className='top'>
                        <span className='top_left'>
                            <h2>{singlePostData.title}</h2>

                            <Button startIcon={<FmdGoodOutlinedIcon />} variant='text' color='warning' disableRipple disableTouchRipple>{singlePostData.address}</Button>

                            <h3><small>$</small> {singlePostData.price}</h3>

                        </span>

                        <span className='top_right'>
                            <img src={userData.img} alt='' />
                            <span>{userData.name}</span>
                        </span>
                    </div>

                    <div className='bottom'>
                        <Typography variant="body1" color="initial.light">

                        {
                            singlePostData.description
                        }

                        </Typography>
                     
                    </div>
                </div>
            </div>
        </div>

        {/* End section */}

        <div className='features'>
            <div className='wrapper'>
                <p className='title'>General</p>
                    <div className='list_vertical'>

                        <div className='icon_text'>
                            <Button startIcon={<HandymanOutlinedIcon />} variant='text' color='warning' disableRipple>
                                <span className='textmui'><h2>Utilites</h2> <p>Renter is responsible</p></span>
                            </Button>
                        </div>

                        <div className='icon_text'>
                        <Button startIcon={<PolicyOutlinedIcon />} variant='text' color='warning' disableRipple>
                                <span className='textmui'><h2>Pet Policy</h2> <p>Pet Allowed</p></span>
                        </Button>
                        </div>

                        <div className='icon_text'>
                            <Button startIcon={<CarRentalOutlinedIcon />} variant='text' color='warning' disableRipple>
                                <span className='textmui'><h2>Property Fees</h2> <p>Must have 3x the rent in total household income</p></span>
                            </Button>
                        </div>
                    </div>
                <p className='title'>Room Sizes</p>
                    <div className='list_horizontal'>
                        <Button startIcon={<RatioOutlinedIcon />} size='small'>
                            80sqm (861sqft)
                        </Button>

                        <Button startIcon={<BedroomChildOutlinedIcon />} size='small'>
                            2 bedroom
                        </Button>

                        <Button startIcon={<BathtubOutlinedIcon />} size='small'>
                            80sqm (861sqft)
                        </Button>
                    </div>
                <p className='title'>Nearby Places</p>

                    <div className='horizontal'>
                    <div className='icon_text'>
                            <Button startIcon={<SchoolOutlinedIcon />} variant='text' color='warning' disableRipple>
                                <span className='textmui'><h2>School</h2> <p>250m away</p></span>
                            </Button>
                    </div>
                       
                    <div className='icon_text'>
                            <Button startIcon={<AirportShuttleOutlinedIcon />} variant='text' color='warning' disableRipple>
                                <span className='textmui'><h2>Bus Stop</h2> <p>100m away</p></span>
                            </Button>
                    </div>

                    <div className='icon_text'>
                            <Button startIcon={<ChurchOutlinedIcon />} variant='text' color='warning' disableRipple>
                                <span className='textmui'><h2>Church</h2> <p>150m away</p></span>
                            </Button>
                    </div>
                    </div>

                <p className='title'>Location</p>
                    <div className='map_container'>
                        <Map items={singlePostData} />
                    </div>

                    <div className='list_horizontal space' style={{margin: '2rem 0 2rem 0'}}>
                        <Button variant='outlined' size='large' color='warning' startIcon={<ChatBubbleOutlineOutlinedIcon />} disableRipple>
                            <Typography variant="subtitle2" component='h5' color="initial">Send a message</Typography>
                        </Button>

                        <Button startIcon={<BookmarkBorderOutlinedIcon />}variant='outlined' size='large' color='warning' disableRipple>
                        <Typography variant="subtitle2" component='h5' color="initial">Save the Place</Typography>
                        </Button>
                    </div>
                    
            </div>
        </div>
    </div>
  )
}

export default ListDetail