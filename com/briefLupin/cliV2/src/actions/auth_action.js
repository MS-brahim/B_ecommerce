import {AUTH_ATTEMPTING, AUTH_SUCCESS, AUTH_FAILED, LOGOUT, AUTH_PROFILE} from './types';
import {apiLogin, apiProfile} from '../api/user';
const TOKEN = 'token'

export const SignIn = request_data =>{

    return async dispatch =>{
        dispatch({type:AUTH_ATTEMPTING});
        try {
            const {data: {token, auth}} = await apiLogin(request_data)
            dispatch(getUsetProfile(auth._id))
            dispatch(success(token))
        } catch (e) {
            const {respons: {data}} = e
            dispatch(error(data.error))
        }
    }
};

export const loadLogIn = () => {
    return dispatch => {
        try {
            let token = localStorage.getItem(TOKEN);
            // console.log(localStorage.getItem(TOKEN_NAME));
            if (token === null || token === 'undefined') {
                return dispatch(error())
            }
            dispatch(success(token))
        } catch (e) {
            console.error(e);
        }
    }
}

export const getUsetProfile = (id) =>{
    return async dispatch => {
        try {
            const auth = await apiProfile(id);
            dispatch({type: AUTH_PROFILE, payload: auth.data})
            // console.log(auth.data);
        } catch (e) {
            console.error(e);
        }
    }
}

export const logout = () => {
    localStorage.clear();
    return ({type:LOGOUT})
}

const success = (token) => {
    localStorage.setItem(TOKEN, token);
    return {type:AUTH_SUCCESS};
};
const error = (error) => {
    return {type:AUTH_FAILED, payload:error}
}