import { Button, FormControl, FormGroup, FormHelperText, InputAdornment, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Link, Navigate} from 'react-router-dom';
import { useLocation, useNavigate } from 'react-router';
import {connect} from 'react-redux'
import '../../Assets/CSS/Login.scss';
import { login } from '../../Redux/Actions/auth';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';

function Login({login, isAuthenticated, loading, error}) {
    const [open, setOpen] = useState(false)
    const navigate = useNavigate();
    const location = useLocation();
    const [formError, setFormError] = useState({
        emailError: '',
        passwordError: '',
    })

    const prevPath = typeof window != 'undefined' && localStorage.getItem('path')

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    })

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name] : e.target.value})
    }

    const {email, password} = formData
    const {emailError, passwordError} = formError;

    const handleVisible = () => {
        setOpen(!open)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const validationErrors = {};
        if(!email.trim()){
            validationErrors.emailError = 'Email is a required field'
        } else if(!/^\S+@\S+\.\S+$/.test(email)){
            validationErrors.emailError = 'Invalid email format';
        }

        if(!password.trim()){
            validationErrors.password = 'Password is a required field';
        }

        if(Object.keys(validationErrors).length > 0){
            setFormError({...formError, emailError: validationErrors.emailError, passwordError : validationErrors.password})
        }else{
            setFormError({...formError, emailError: '', passwordError: ''})
            login(email, password)
        }
        
}

useEffect(() => {
    if(isAuthenticated && localStorage.getItem('path')){
        navigate(prevPath)
        typeof window != 'undefined' && sessionStorage.removeItem('path')
    }

   else if(isAuthenticated && typeof window != 'undefined' && !localStorage.getItem('path')){
        navigate('/')
    }
    else{
        navigate('')
    }
},[isAuthenticated])


console.log('is Authenticated? ', error.response?.data?.detail )
  return (
    <div className='login_page'>

        <div className='page_left'>
            <img src='' alt='' />
            <div className='over_design'>
                <span className='header-text'>
                    Welcome to De bees
                </span>
            </div>
        </div>

        <div className='page_right'>
            <div className='wrapper'>
                <span className='text-top'>Sign In</span>

                {
                    error?.response?.data?.detail == 'No active account found with the given credentials' ? <p className='error'>Invalid email or password</p> : ''
                }

                {
                    error?.code == 'ERR_NETWORK' ? <p style={{color: '#af2828' }} className='error'>Unable to access  the server, please check your internet connection and try again</p> : ''
                }

            <FormControl onSubmit={handleSubmit} component='form' error>
                <FormGroup >
                    <TextField onChange={handleChange} name='email' value={email} label='Email' variant='outlined' type='email' color='secondary'
                     helperText={`${emailError ? emailError : ''}`} error={Boolean(emailError)}
                    />
                    
                    <TextField onChange={handleChange} name='password' value={password} label='Password' variant='outlined'type={open ? 'text' : 'password'} color='secondary' 
                    InputProps={{
                        endAdornment : <InputAdornment position='end'>
                        {
                            open ? <RemoveRedEyeOutlinedIcon onClick={handleVisible} style={{cursor: 'pointer'}} /> :
                                    <VisibilityOffOutlinedIcon onClick={handleVisible} style={{cursor: 'pointer'}} />
                        }  </InputAdornment>
                    }}
                    helperText={`${passwordError ? passwordError : ''}`}
                    error={Boolean(passwordError)}
                    />
                    <span className='btn'>
                         <Button disable={loading && true} type='submit' variant='contained' color='warning'>{loading ? 'Authenticating..' : 'Sign In'}</Button>
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

const mapStateToProps = (state) => ({
    loading: state.auth.loading,
    isAuthenticated: state.auth.isAuthenticated,
    error: state.auth.error,
})

export default connect(mapStateToProps, {login})(Login);