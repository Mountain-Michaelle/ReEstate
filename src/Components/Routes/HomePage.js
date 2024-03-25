import React, { useState } from 'react';
import '../../Assets/CSS/HomePage.scss';
import imgEstate from '../../Assets/Images/ImgEstate.png';
import Typography from '@mui/material/Typography'
import { TextField } from '@mui/material';
import SearchBar from './SearchBar.js';

const HomePage = () => {

  return (
    <div className='home_page'>
        <div className='textContainer'>
            <div className='wrapper'>
              <Typography variant='h4' style={{textTransform:'capitalize'}} >
                 Get your Dream Done here at DeBees Real Estate int'l
              </Typography>
              <Typography variant="subtitle2" color="initial">
                some texts here that will be written with ai fetch and help.
              </Typography>

              <SearchBar />

              <div className='boxes'>
                <div className='box'>
                  <h1>200+</h1>
                  <h2>Field Experience</h2>
                </div>

                <div className='box'>
                  <h1>20+</h1>
                  <h2>Award gained</h2>
                </div>

                <div className='box'>
                  <h1>200+</h1>
                  <h2>Verified clients</h2>
                </div>
              </div>
            </div>
        </div>

        <div className='imgContainer'>
            <img src={imgEstate} alt="" />                                                
        </div>
    </div>
  )
}

export default HomePage