import {combineReducers} from 'redux';

// COMMON
import cartReducer from './cart/cart.reducer';

const rootReducer = combineReducers({
  cart: cartReducer,
});

export default rootReducer;
