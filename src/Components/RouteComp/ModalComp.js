import React, { useEffect, useState } from 'react'
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import '../../Assets/CSS/ModalComp.scss';
import { Alert, Button, FormControl, FormGroup, IconButton, LinearProgress, TextField } from '@mui/material';
import { createTheme, ThemeProvider, Theme, useTheme } from '@mui/material/styles';
import { customTheme } from '../../Assets/CSS/customTheme';
import { useFormik } from 'formik';
import * as Yup from 'yup'
// Copied
import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import CancelIcon from '@mui/icons-material/Cancel';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import axios from 'axios';

export const ModalComp = ({isOpen, isClose}) => {

    const BASE_URL = 'http://127.0.0.1:8000'
    const [success, setSuccess] = useState(false)
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const [sent, setSent] = useState(false)


    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        pt: 2,
        px: 4,
        pb: 3
    }

    // const handleOpen = () => {
    //     setIsOpen(!isOpen)
    // }

    const initialValues = {
        name: '',
        phone: '',
        email: '',
        subject: '',
        message: '',
    }

    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

    const validationSchema = Yup.object({
        name : Yup.string().required("Please provide your name"),
        email : Yup.string().required("Please provide and image").email("Invalid email"),
        subject: Yup.string().required("Please set a subject message"),
        phone: Yup.string().required("Please provide a valid phone").matches(phoneRegExp, "Invalid phone"),
        message: Yup.string().required("Please provide your message here")
    })

    const formik = useFormik({
        initialValues,
        validationSchema,

        onSubmit: async (values, {resetForm}) => {
            // Distructuring the variables 
            setLoading(true)
            setError('')
            const {name, email, subject, phone, message} = values

            const config  = {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                }
            }
            try{
            const body = JSON.stringify({name, email, phone, message, subject})

            await axios.post(`${process.env.REACT_APP_ENDPOINT_URL}/contacts/`, body, config)
            .then(res => {
                setSuccess(true)
                setError('')
                setLoading(false)
                resetForm({})
            })

            .catch(error => {
                setError("Sorry, Somthing went Wrong")
                setSuccess(false)

                if(!error.response?.data){
                    setError("Server or internet connection error, \n Checkup and try again")
                }
                setLoading(false)
            })  
            }
            catch(error){
                console.log(error)
            }
        }
    })

    const {name, phone, email, subject, message} = formik.values

    const outerTheme = useTheme();
    const defaultTheme = createTheme();

    console.log(error)
    let result = [];

    useEffect(() => {
    let interval;

    if(success){
        setSent(true)
        interval = setTimeout(() => {
               setSent(false)
               isClose()
            },5000)
    }

    return () => {
        clearTimeout(interval)
    }

    },[success])
    
  

  return (
    <Modal 
    open={isOpen}
    onClose={isClose}
    aria-labelledby="parent-modal-title"
    aria-describedby="parent-modal-description"
    >

    <ThemeProvider theme={outerTheme}>
        <Container component="main" maxWidth="xs">
            <CssBaseline />

            <IconButton onClick={isClose} sx={{position: 'fixed', top: '2%', left: '50%'}} >
                <CloseOutlinedIcon />
            </IconButton>

            <Box
            sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                overflow: 'hidden'
            }}
            >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                <HomeWorkIcon />
            </Avatar>

            {
                sent ? 
                (
                <div className='alert' style={{transition: '0.5s all'}}>
                    <Alert 
                    color="success"
                    variant="solid"
                    invertedColors
                    sx={{transition:'0.7s ease-in-out'}}

                    startDecorator={<CheckCircleOutlineIcon size='large' color='success' />}


                    // endDecorator={
                    //     <Button size="sm" variant="text" sx={{color: 'red'}}>
                    //     Close
                    //     </Button> }
                         >
                        <span>

                             <h3>
                            Thank You
                            </h3> 
                            <Typography variant='body2' sx={{color:'green'}}>We have recieved your message successfully!</Typography>
                        </span>
                        
                    <LinearProgress
                        variant="solid"
                        color="success"
                        value={40}
                        sx={{
                            position: 'absolute',
                            bottom: 0,
                            left: 0,
                            right: 0,
                            borderRadius: 0,
                            minHeight: 5,
                        }}
                    />

                    </Alert> 
                    <span className='cancle'>
                        <CancelIcon onClick={isClose} color='warning' width/>
                    </span>

                    </div>
                    ) 
               
                 :

                ''
            }

            <Typography component="h1" variant="h5" >
                Pleasure Hearing From You!
            </Typography>
            {
                error != '' ?  <Typography variant='body2' color='error' sx={{textAlign:'center'}}>{error}</Typography> : ''
            }

            <Box component="form" noValidate onSubmit={formik.handleSubmit} sx={{ mt: 3, overflow: 'hidden' }}>
                <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <TextField
                    autoComplete="given-name"
                    name="name"
                    size='small'
                    required
                    fullWidth
                    id="firstName"
                    label="Name"
                    color='secondary'
                    value={name}
                    {...formik.getFieldProps('name')}
                    error={formik.touched.name && formik.errors.name}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                    required
                    fullWidth
                    size='small'
                    id="Phone"
                    label="Phone"
                    name="phone"
                    autoComplete="phone"
                    color='secondary'
                    value={phone}
                    {...formik.getFieldProps('phone')}
                    error={formik.errors.phone && formik.touched.phone}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                    required
                    fullWidth
                    id="email"
                    size='small'
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    color='secondary'
                    value={email}
                    {...formik.getFieldProps('email')}
                    error={formik.errors.email && formik.touched.email}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                    required
                    fullWidth
                    id="subject"
                    size='small'
                    label="Message Subject"
                    name="subject"
                    autoComplete="subject"
                    color='secondary'
                    value={subject}
                    {...formik.getFieldProps('subject')}
                    error={formik.errors.subject && formik.touched.subject}
                    />
                </Grid>
                 <Grid item xs={12}>
                    <TextField
                    required
                   fullWidth
                    id="outlined-multiline-flexible"
                        label="Message"
                        multiline
                        maxRows={4}
                        size='large'
                        color='secondary'
                        value={message}
                    {...formik.getFieldProps('message')}
                    error={formik.errors.message && formik.touched.message}
                    />

                </Grid>
                <Grid item xs={12}>
                    <FormControlLabel sx={{label:'1px', display: 'flex', margin: '0 auto'}}
                    control={<Checkbox value="allowExtraEmails" color="secondary" />}
                    label="I want to receive marketing promotions and updates via email."
                    />

                </Grid>
                </Grid>
                <Button
                type="submit"
                fullWidth
                variant="contained"
                color='secondary'
                sx={{ mt: 3, mb: 2, width: 200, }}
                >
                {
                    loading ? 'Sending...' : 'Send'
                }
                </Button>
            </Box>
            </Box>
        </Container>
        </ThemeProvider>
    </Modal>
  )
}
