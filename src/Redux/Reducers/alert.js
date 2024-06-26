import { SET_ALERT, REMOVE_ALERT} from "../Actions/types";



const initialState = []

export default function(state=initialState, action){
    const {type, action} = action;

    switch(type){
        case SET_ALERT:
        return{
            ...state,
            payload
        }
        
        case REMOVE_ALERT:
            return state.filter(alert => alert.id !== payload);
    }
}