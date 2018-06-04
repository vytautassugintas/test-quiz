import itemReducer from './item-reducer';
import * as actionTypes from '../actions/action-types';

it('should set isLoading to true when request starts', () => {
  expect(
    itemReducer({
      isLoading: false
    }, {
      type: actionTypes.FETCH_ITEM_REQUEST
    })).toEqual({
    isLoading: true
  })
});

it('should set error to action reason when request fails', () => {
  expect(
    itemReducer({
      isLoading: false
    }, {
      type: actionTypes.FETCH_ITEM_FAILURE,
      reason: 'Error'
    })).toEqual({
    isLoading: false,
    error: 'Error'
  })
});

it('should set item to state from payload', () => {
  expect(
    itemReducer({
      isLoading: false
    }, {
      type: actionTypes.FETCH_ITEM_SUCCESS,
      payload: {
        id: '3'
      }
    })).toEqual({
    isLoading: false,
    item: {
      id: '3'
    }
  })
});