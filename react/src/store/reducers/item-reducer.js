import * as actionTypes from '../actions/action-types';

const INITIAL_STATE = {
  item: {},
  isLoading: true,
  error: undefined
};

function itemReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case actionTypes.FETCH_ITEM_REQUEST:
      return Object.assign({}, state, {
        isLoading: true,
        item: {}
      });

    case actionTypes.FETCH_ITEM_FAILURE:
      return Object.assign({}, state, {
        isLoading: false,
        error: action.reason
      });

    case actionTypes.FETCH_ITEM_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        item: Object.assign({}, action.payload)
      });

    default:
      return state;
  }
}

export default itemReducer;
