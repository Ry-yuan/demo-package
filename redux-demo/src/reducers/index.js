import {combineReducers} from 'redux';
import productsReducer from './product-reducer';
import cartReducer from './cart-reducer';

const allReducers = {
    products:productsReducer,
    shoppingCart:cartReducer
}

const rootReducer = combineReducers(allReducers);

export default rootReducer;