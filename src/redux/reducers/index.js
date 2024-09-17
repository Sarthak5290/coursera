import { combineReducers } from 'redux';
import cartReducer from './cardReducer';

const rootReducer = combineReducers({
  cart: cartReducer,
});

export default rootReducer;
