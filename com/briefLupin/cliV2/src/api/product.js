import axios from 'axios';

export const apiSingleProduct = ()=>{
    return axios.get('/product/single/1')
}

