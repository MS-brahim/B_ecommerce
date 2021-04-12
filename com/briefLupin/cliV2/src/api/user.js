import axios from 'axios';

export const apiSignUp = (request_data) =>{
    return axios.post('/api/user/register', request_data)
}

export const apiSuperAdminSignUp = (request_data) =>{
    return axios.post('/api/user/super-admin/login', request_data)
}

export const apiLogin = request_data =>{
    // console.log(request_data);
    return axios.post('/api/user/login', request_data)
}

export const apiProfile = (id) =>{
    return axios.get('/api/user/'+id)
}