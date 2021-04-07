import {combineReducers} from 'redux';

import auth from './auth_reducer';
import singleProd from './product_reducer';

export default combineReducers({
    auth,
    singleProd,
})