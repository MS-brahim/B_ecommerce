import {ADD_TO_CART, REMOVE_FROM_CART, CLEAR_CART} from './types';


//add cart action
export const addToCart= (idProd)=>{
    return{
        type: ADD_TO_CART,
        idProd
    }
}