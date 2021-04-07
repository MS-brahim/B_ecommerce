import {ADD_TO_CART, REMOVE_ITEM, SUB_QUANTITY, ADD_QUANTITY, ADD_SHIPPING} from '../actions/types';

const INITIAL_STATE = {
    products: this.props.products,
    cartItems: [],
    total:0
}

 
const cartReducer =  (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            let addedItem = state.products.find(item=> item._id === action._id)
            console.log(addedItem);
            this.setState({
                products
            })
            //check if the action id exists in the addedItems
            let existed_item= state.addedItems.find(item=> action._id === item._id)
            if(existed_item)
            {
                addedItem.quantity += 1 
                return{
                    ...state,
                    total: state.total + addedItem.price 
                    }
            }
            else{
                addedItem.quantity = 1;
                //calculating the total
                let newTotal = state.total + addedItem.price 
                
                return{
                    ...state,
                    addedItems: [...state.addedItems, addedItem],
                    total : newTotal
                }
                
            }

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