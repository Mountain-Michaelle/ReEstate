import { 
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOAD_USER_FAIL,
    LOAD_USER_SUCCESS

 } from "../Actions/types";


 const initialState = {
    access: localStorage.getItem('access'),
    refresh: localStorage.getItem('refresh'),
    isAuthenticated : false,
    user: null
 }


export default function(state=initialState, action){
    const {type, payload} = action

    switch(type){
       
        case LOGIN_SUCCESS:
            localStorage.setItem('access', payload.access)
            return{
                ...state,
                isAuthenticated: true,
                refresh: payload.refresh,
                access: payload.access,
            }

         case LOGIN_FAIL:
            localStorage.removeItem('access')
            localStorage.removeItem('refresh')

            return{
                ...state,
                access: '',
                refresh: '',
                isAuthenticated: false
            }


        case LOAD_USER_FAIL:
            return{
                ...state,
                user: null,
            }

        case LOAD_USER_SUCCESS:
            return{
                ...state,
                user: payload
            }

        default:
            return state;
    }
}
