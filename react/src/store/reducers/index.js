import { combineReducers } from 'redux';
import itemsReducer from './items-reducer';
import itemReducer from './item-reducer';

export default combineReducers({
  shopItems: itemsReducer,
  singleItem: itemReducer
});
