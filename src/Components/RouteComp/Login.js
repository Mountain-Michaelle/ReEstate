import { Button, FormControl, FormGroup, TextField } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom';
import '../../Assets/CSS/Login.scss';

function Login() {
  return (
    <div className='login_page'>

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
                <span className='text-top'>Sign In</span>
            <FormControl component='form'>
                <FormGroup >
                    <TextField label='Email' variant='outlined' type='email' color='secondary' />

                    <TextField label='Password' variant='outlined'type='password' color='secondary' />
                    <span className='btn'>
                         <Button variant='contained' color='warning'>Sign In</Button>
                    </span>
                   
                </FormGroup>
            </FormControl> 

            <span className='p_text'>
               <p>Don't have an account ? <Link to='/sign-up' >Sign Up here</Link></p> 
            </span>
            </div>
        

        </div>
    </div>
  )
}

export default Login