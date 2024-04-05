import axios from "axios";
import { 
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOAD_USER_FAIL,
    LOAD_USER_SUCCESS,
    IS_LOADING,

 } from "../Actions/types";


const loadUser = () => async dispatch =>{

}


 const login = () => async dispatch => {

    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    const body = JSON.string({email, password})

    try{
        const res = axios.post()

        dispatch({
            type: LOGIN_SUCCESS,
        })
    }
    catch(error){

        dispatch({
            payload: LOGIN_FAIL
        })
    }
 }