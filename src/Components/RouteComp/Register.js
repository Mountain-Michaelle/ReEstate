import { Button, FormControl, FormGroup, FormHelperText, TextField } from '@mui/material'
import React, { useState, useEffect } from 'react'
import {connect} from 'react-redux';
import { sign_up } from '../../Redux/Actions/auth';
import { Link, useNavigate } from 'react-router-dom';
import '../../Assets/CSS/Register.scss';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {LineWave} from 'react-loader-spinner'

function Register({sign_up, loading, error, f_error, success}) {


    const [fError, setFError] = useState('')

    const initialValues = {
        'name': '',
        'email': '',
        'phone': '',
        'password': '',
        're_password': '',
    }

    const navigate = useNavigate()
    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
    const validationSchema = Yup.object({

        name : Yup.string().required('Name is a required field'),
        email : Yup.string().required('Email is a required field').email('Invalid email'),
        phone : Yup.string().required('Phone is a required field').matches(phoneRegExp, 'Invalid phone'),
        password: Yup.string().required('Password is a required field').min(8, 'Passwords must be at least 8 characters'),
        re_password: Yup.string().label('Confirm password').required().oneOf([Yup.ref('password'), null,], 'Passwords do not match'),

        })

    const formik = useFormik({
     initialValues,
     validationSchema,

     onSubmit: async values => {
        const {name, email, phone, password, re_password} = values
        sign_up(name, email, phone, password, re_password)
     }

   });

   const {name, email, phone, password, re_password} = formik.values

useEffect(() => {
 if(f_error.error === "Account email already exists"){
        setFError(f_error.error) 
    }else{
        setFError('')
    }
},[f_error])
   

useEffect(() => {
    if(f_error === ''){
       navigate('') 
    } 
    else if(f_error.error){
    navigate('')
    }
    else if(f_error.success === "Account created successfully!"){
        navigate('/sign-in')
    }
},[success])


   console.log("hello: ", success.success)

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
            <FormControl component='form' onSubmit={formik.handleSubmit}>
                <FormGroup >
                <TextField label='Name' 
                    value={name} name='name' 
                    onChange={formik.handleChange} 
                    {...formik.getFieldProps("name")} 
                    variant='standard' type='name' color='secondary' 
                    helperText={formik.errors && formik.touched.name ? formik.errors.name : ''}
                    error={formik.errors.name ? formik.touched.name : ''}
                    size='small'
                    />

                <TextField label='Phone'
                value={phone} name='phone' 
                onChange={formik.handleChange} 
                {...formik.getFieldProps("phone")} 
                 variant='standard' type='text' color='secondary' 
                 helperText={formik.errors && formik.touched.phone ? formik.errors.phone : ''}
                 error={formik.errors.phone ? formik.touched.phone : ''}
                 size='small'
                 />

                <TextField label='Email' variant='standard' type='email' color='secondary'
                value={email} name='email' 
                onChange={formik.handleChange} 
                {...formik.getFieldProps("email")}
                helperText={formik.errors && formik.touched.email ? formik.errors.email : ''}
                error={formik.errors.email ? formik.touched.email : ''}
                size='small'
                />
                {
                 f_error  ? <FormHelperText error>{fError}</FormHelperText> : ''
                }
                <TextField label='Password' variant='standard'type='password' color='secondary'
                value={password} name='password' 
                onChange={formik.handleChange} 
                {...formik.getFieldProps("password")}
                helperText={formik.errors && formik.touched.password ? formik.errors.password : ''}
                error={formik.errors.password ? formik.touched.password : ''}
                size='small'
                />

                <TextField label='Confirm Password' variant='standard' type='password' color='secondary'
                value={re_password} name='re_password' 
                onChange={formik.handleChange} 
                {...formik.getFieldProps("re_password")}
                helperText={formik.errors && formik.touched.re_password ? formik.errors.re_password : ''}
                error={formik.errors.re_password ? formik.touched.re_password : ''}
                size='small'
                />

                <span className='btn'>
                  
                 {
                        loading ?
                        <span className='loader'>
                            <LineWave
                            visible={true}
                            height="60"
                            width="100"
                            color="#f75200"
                            ariaLabel="line-wave-loading"
                            wrapperStyle={{}}
                            wrapperClass=""
                            firstLineColor=""
                            middleLineColor=""
                            lastLineColor=""
                            />
                        </span>

                    
                   :
                    <Button type='submit' variant='contained' color='warning' disable={loading && true}>sign up</Button>  
                    
                    }
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

const mapStateToProps = state => ({
    success: state.auth.success,
    error: state.auth.error,
    f_error: state.auth.f_error,
    loading: state.auth.loading
})
export default connect(mapStateToProps, {sign_up})(Register)