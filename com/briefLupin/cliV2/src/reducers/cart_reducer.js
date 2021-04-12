import {ADD_TO_CART, REMOVE_FROM_CART, CLEAR_CART} from '../actions/types';

// const INITIAL_STATE = {
//     cart: [
//         {id:1, name:'ProductItem1'},
//         {id:3, name:'ProductItem3'},
//         {id:2, name:'ProductItem2'}
//     ],
//     qty:3
// }

export default function cartReduer(state = {products:[]}, action){

    switch(action.type){
        case ADD_TO_CART: {
            return { 
                loading: true, 
                products: action.payload
            }
        }

        case REMOVE_FROM_CART: {
            return { 
                loading:true,
                products: state.products.filter(x=> x._id!== action.payload)
            };
        }

        case CLEAR_CART: {
            return {
                loading:false,
                products : []
            };
        }

        default:
            return state;
    }
}