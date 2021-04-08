import {ADD_TO_CART, REMOVE_ITEM, SUB_QUANTITY, ADD_QUANTITY, ADD_SHIPPING} from '../actions/types';

const INITIAL_STATE = {
    cartItems: [
        {id:1, name:'ProductItem'},
        {id:1, name:'ProductItem'},
        {id:1, name:'ProductItem'}
    ],
    qty:0
}

 
const cartReducer =  (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return ...state
                
        

        // case REMOVE_ITEM:
        //     return {...state, fetching: false, cartItems:action.payload};
        // case SUB_QUANTITY:
        //     return {...state, fetching: false};
        // case ADD_QUANTITY:
        //      return {...state, fetching: false};
        // case ADD_SHIPPING:
        //     return {...state, fetching: false};
        default:
            return state
    }
}

export default cartReducer