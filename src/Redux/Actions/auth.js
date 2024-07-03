import axios from "axios";
import {
    AUTHENTICATION_SUCCESS,
    AUTHENTICATION_FAILED,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    SIGNUP_SUCCESS,
    SIGNUP_FAIL,
    LOAD_USER_FAIL,
    LOAD_USER_SUCCESS,
    IS_LOADING,
    LOGOUT_SUCCESS,
    LOGOUT_FAIL,

 } from "../Actions/types";
import { setAlert } from "./alert";

export const loadUser = () => async dispatch => {

    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
            'Accept': 'application/json'
        }
    }

    const body = JSON.stringify(localStorage.getItem('access'))
    try{
        const res = await axios.post(`${process.env.REACT_APP_ENDPOINT_URL}/account/user/`, body, config)

        if(res?.data){

        dispatch({
            type: LOAD_USER_SUCCESS,
            payload: res?.data
        })
        // load user after login
        dispatch(setAlert('Authenticated Success!', 'success'))

        }else{

        dispatch({
            type: LOAD_USER_FAIL,
        })
        }
    } catch(error){
        dispatch({
            type: LOAD_USER_FAIL,
        })
    }
 }

 export const checkAuthentiated = () => async dispatch => {

    if(localStorage.getItem('token')){

        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token') }`,
                'Accept': 'application/json'
            }
        } 
        const body = JSON.stringify(localStorage.getItem('access'))

    try{
       const res = await axios.post(`${process.env.REACT_APP_ENDPOINT_URL}/account/is-authenticated/`, body, config)

       if (res.data.isAuthenticated){
            dispatch({
                type: AUTHENTICATION_SUCCESS
            })
            dispatch(loadUser())
       }
       else if(res.data.code === 'token_not_valid'){
        dispatch({
            type: AUTHENTICATION_FAILED
        })
       }

    }catch(error){
        dispatch({
            type: AUTHENTICATION_FAILED,
            payload: error.response.data
        })
    }

}
 }


// LOGIN FUNCTION
export const login = (email, password) => async dispatch => {

    dispatch({
        type: IS_LOADING
    })

    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'withCrendentials': true
        }
    }

    const body = JSON.stringify({email, password})

    try{
        const res = await axios.post(`${process.env.REACT_APP_ENDPOINT_URL}/api/token/`, body, config)

        if(res?.data){

        dispatch({
            type: LOGIN_SUCCESS,
            payload: res?.data,
        })
        // load user after login
        dispatch(setAlert('Authenticated Success!', 'success'))
        dispatch(loadUser())

        }else{

        dispatch({
            type:LOGIN_FAIL,
        })
        }
    } catch(error){
        dispatch({
            type: LOGIN_FAIL,
            payload: error.response
        })
        if(error != error.response){
            dispatch({
                type: LOGIN_FAIL,
                payload: error
            })
        }
    }
 }



 // SIGNUP FUNCTION
export const sign_up = (name, email, phone, password, re_password) => async dispatch => {

    dispatch({
        type: IS_LOADING
    })

    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'withCrendentials': true
        }
    }

    const body = JSON.stringify({name, email, phone, password, re_password})

    try{
        const res = await axios.post(`${process.env.REACT_APP_ENDPOINT_URL}/account/sign-up/`, body, config)

        if(res.data){

        dispatch({
            type: SIGNUP_SUCCESS,
            payload: res.data
        })

        }else{

        dispatch({
            type: SIGNUP_FAIL,
        })
        }
    } catch(error){
        dispatch({
            type: SIGNUP_FAIL,
            payload: error,
        })
    }
 }

 export const Logout = () => async dispatch => {

    if(localStorage.getItem('token')){

        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token') }`,
            }
        }
        
        const body = JSON.stringify(localStorage.getItem('access'))

    try{
       const res = await axios.post(`${process.env.REACT_APP_ENDPOINT_URL}/account/is-authenticated/`, body, config)

       if (res.data.isAuthenticated){
            dispatch({
                type: LOGOUT_SUCCESS
            })
            dispatch(loadUser())
       }
       else if(res.data.code === 'token_not_valid'){
        dispatch({
            type: LOGOUT_FAIL
        })
       }

    }catch(error){
        dispatch({
            type: LOGOUT_FAIL,
            payload: error.response.data
        })
    }

}
 }