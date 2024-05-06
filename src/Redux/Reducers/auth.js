import {
    AUTHENTICATION_SUCCESS,
    AUTHENTICATION_FAILED,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    SIGNUP_SUCCESS,
    SIGNUP_FAIL,
    LOAD_USER_FAIL,
    LOAD_USER_SUCCESS,
    IS_LOADING

 } from "../Actions/types";


 const initialState = {
    token: typeof window != 'undefined' && localStorage.getItem('token'),
    refresh: typeof window != 'undefined' && localStorage.getItem('refresh'),
    isAuthenticated : false,
    user: null,
    loading: false,
    success: '',
    f_error: '',
    error: '',
 }


export default function(state=initialState, action){
    const {type, payload} = action

    switch(type){

        case IS_LOADING:
            return{
                ...state,
                loading: true,
                error: '',
            }
        case SIGNUP_SUCCESS:
            return{
                ...state,
                success: payload,
                isAuthenticated: false,
                loading: false,
                f_error: payload,
            }

        case SIGNUP_FAIL:
            return{
                ...state,
                success: '',
                isAuthenticated: false,
                loading: false,
                error: payload
            }
        case AUTHENTICATION_SUCCESS:
            return{
                ...state,
                isAuthenticated:  true
            }

        case AUTHENTICATION_FAILED:
            return{
                ...state,
                isAuthenticated: false
            }
            
        case LOGIN_SUCCESS:
            typeof window != 'undefined' &&   localStorage.setItem('token', payload.access)
            typeof window != 'undefined' &&  localStorage.setItem('refresh', payload.refresh)
            return{
                ...state,
                isAuthenticated: true,
                refresh: payload.refresh,
                access: payload.access,
                success: true,
                loading: false,
            }

         case LOGIN_FAIL:
            typeof window != 'undefined' && localStorage.removeItem('token')
            return{
                ...state,
                access: '',
                refresh: '',
                isAuthenticated: false,
                loading: false,
                error: payload

            }


        case LOAD_USER_FAIL: 
            return{
                ...state,
                user: null,
            }

        case LOAD_USER_SUCCESS:
            return{
                ...state,
                user: payload,
                loading: false,
            }

        

        default:
            return state;
    }
}
