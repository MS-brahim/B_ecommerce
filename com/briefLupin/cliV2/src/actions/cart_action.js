import {ADD_TO_CART, REMOVE_ITEM, SUB_QUANTITY, ADD_QUANTITY, ADD_SHIPPING} from './types';


//add cart action
export const addToCart= (idProd)=>{
    return{
        type: ADD_TO_CART,
        idProd
    }
}