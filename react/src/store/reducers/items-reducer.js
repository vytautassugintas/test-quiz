import * as actionTypes from '../actions/action-types';

const INITIAL_STATE = {
  items: [],
  totalItems: 0,
  start: 0,
  limit: 9,
  isLoading: false,
  isLoadMoreVissible: true,
  error: undefined
};

function itemsReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case actionTypes.FETCH_ITEMS_REQUEST:
      return Object.assign({}, state, {
        isLoading: true
      });

    case actionTypes.FETCH_ITEMS_FAILURE:
      return Object.assign({}, state, {
        isLoading: false,
        error: action.reason
      });

    case actionTypes.FETCH_ITEMS_SUCCESS:
      const { start, limit, items, totalItems = 0 } = action.payload;
      return Object.assign({}, state, {
        isLoading: false,
        isLoadMoreVissible: limit < totalItems,
        start,
        limit,
        items: [...state.items, ...items],
        totalItems
      });

    default:
      return state;
  }
}

export default itemsReducer;
