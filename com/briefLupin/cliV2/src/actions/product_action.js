import { FETCHING_PRODUCT, FETCHING_PRODUCT_SUCCESS, FETCHING_PRODUCT_FAILED} from '../actions/types';
import {apiSingleProduct} from '../api/product';

export const singleProduct = response_data => {
    
    return async dispatch =>{
        dispatch({type:FETCHING_PRODUCT});
        try {
            const {data} = await apiSingleProduct(response_data);
            dispatch ({type:FETCHING_PRODUCT_SUCCESS, payload:data});
        } catch (e) {
            dispatch({type:FETCHING_PRODUCT_FAILED})
        }
    }
}




