import * as actionTypes from '../actions/action-types';

const INITIAL_STATE = {
  favourites: [],
  isLoading: false,
  loaded: false,
  error: undefined
};

function favouritesReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case actionTypes.ADD_FAVOURITE:
      return Object.assign({}, state, {
        favourites: [...state.favourites, action.id]
      })
    case actionTypes.REMOVE_FAVOURITE:
      return Object.assign({}, state, {
        favourites: state.favourites.filter(id => id !== action.id)
      })
    case actionTypes.FETCH_FAVOURITES_REQUEST:
      return Object.assign({}, state, {
        isLoading: true
      });

    case actionTypes.FETCH_FAVOURITES_FAILURE:
      return Object.assign({}, state, {
        isLoading: false,
        error: action.reason
      });

    case actionTypes.FETCH_FAVOURITES_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        loaded: true,
        favourites: [...state.favourites, ...action.payload]
      });

    default:
      return state;
  }
}

export default favouritesReducer;
