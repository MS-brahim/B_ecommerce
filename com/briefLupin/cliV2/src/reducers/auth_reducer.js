import {AUTH_ATTEMPTING, AUTH_SUCCESS, AUTH_FAILED, LOGOUT, AUTH_PROFILE, SIGNUP_SUCCESS} from '../actions/types';
const INITIAL_STATE = {
    attempting: false,
    isAuth: false,
    auth:{},
    error: null,
    register:false
};
 
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case AUTH_ATTEMPTING:
            return {...state, attempting: true, isAuth: false, error: null}
        case AUTH_SUCCESS:
            return {...state, attempting: false, isAuth: true, error: null}
        case AUTH_FAILED:
            return {...state, attempting: false, isAuth: false, error: action.payload}
        case LOGOUT:
            return {...state, isAuth: false, auth: {}}
        case AUTH_PROFILE: 
            return {...state, auth: action.payload}
        case SIGNUP_SUCCESS:
            return { ...state, error: null, register: true };
        default:
            return state
    }
}