import { Typography } from '@mui/material'
import React from 'react'
import '../../Assets/CSS/NotFound.scss';

const NotFound = () => {

  return (
    <div className='not_found'>
        <div className='wrapper'>
             <h1 variant='h2' error> 404 Not Found</h1>
             <Typography variant='body1' component='body2' error>The link you requested was not found here</Typography>
        </div>
    </div>
  )
}

export default NotFound