import React from 'react'
import '../../Assets/CSS/User.scss';
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { Link } from 'react-router-dom';

const isImage = false

function User({datas}) {
  return (
    <div className='user_container'>
        {
            isImage ? <img src={datas.img} alt='' />
            :
            <div className='first_word'>{datas.name.slice(0, 1)}</div>
        }
        
        <span className='name'>{datas.name}</span>

        <span className='profile'>
            <Link to='/user' >
                 <Button variant="text" color="primary" size='small'><Typography variant="text" color="initial">Profile</Typography> </Button>
            </Link>
        </span>
    </div>
  )
}

export default User