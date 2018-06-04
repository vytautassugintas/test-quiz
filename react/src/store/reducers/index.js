import { combineReducers } from 'redux';
import itemsReducer from './items-reducer';
import itemReducer from './item-reducer';
import favouritesReducer from './favourites-reducer';

export default combineReducers({
  shopItems: itemsReducer,
  singleItem: itemReducer,
  favourites: favouritesReducer
});
