import axios from 'axios';

export const apiLogin = request_data =>{
    // console.log(request_data);
    return axios.post('/api/user/login', request_data)
}

export const apiProfile = (id) =>{
    return axios.get('/api/user/'+id)
}