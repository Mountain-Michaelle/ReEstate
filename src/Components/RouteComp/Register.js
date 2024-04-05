import { Button, FormControl, FormGroup, TextField } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom';
import '../../Assets/CSS/Register.scss';

function Register() {
  return (
    <div className='register_page'>

        <div className='page_left'>
            <img src='' alt='' />
            <div className='over_design'>
                <span className='header-text'>
                    Welcome back to De bees
                </span>
            </div>
        </div>


        <div className='page_right'>
            <div className='wrapper'>
                <span className='text-top'>Account Sign Up</span>
            <FormControl component='form'>
                <FormGroup >
                <TextField label='Name' variant='standard' type='email' color='secondary' />

                <TextField label='Phone' variant='standard' type='email' color='secondary' />

                <TextField label='Email' variant='standard' type='email' color='secondary' />

                <TextField label='Password' variant='standard'type='password' color='secondary' />
                <TextField label='Confirm Password' variant='standard'type='password' color='secondary' />
                <span className='btn'>
                        <Button variant='contained' color='warning'>Sign Up</Button>
                </span>
                   
                </FormGroup>
            </FormControl> 

            <span className='p_text'>
               <p>Already have an account ? <Link to='/sign-in' >Sign In here</Link></p> 
            </span>
            </div>
        

        </div>
    </div>
  )
}

export default Register