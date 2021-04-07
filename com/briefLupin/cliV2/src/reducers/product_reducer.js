import {FETCHING_PRODUCT, FETCHING_PRODUCT_SUCCESS, FETCHING_PRODUCT_FAILED} from '../actions/types';

const INITIAL_STATE = {
    fetching: false,
    singleProd: [],
}
 
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCHING_PRODUCT:
            return {...state, fetching: true};
        case FETCHING_PRODUCT_SUCCESS:
            return {...state, fetching: false, singleProd:action.payload};
        case FETCHING_PRODUCT_FAILED:
            return {...state, fetching: false};
        default:
            return state
    }
}