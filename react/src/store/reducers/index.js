import { combineReducers } from 'redux';
import itemsReducer from './items-reducer';

export default combineReducers({
  shopItems: itemsReducer
});
