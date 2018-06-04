import favouritesReducer from './favourites-reducer';
import actions from '../actions';
import * as actionTypes from '../actions/action-types';

it('should add favourite id to items list', () => {
  expect(
    favouritesReducer({
      items: []
    }, {
      type: actionTypes.ADD_FAVOURITE,
      id: 'id'
    })).toEqual({
    items: ['id']
  })
});

it('should remove favourite id from items list', () => {
  expect(
    favouritesReducer({
      items: ['id', 'otherId']
    }, {
      type: actionTypes.REMOVE_FAVOURITE,
      id: 'id'
    })).toEqual({
    items: ['otherId']
  })
});

it('should concat currently favourited items with new and set state to loaded', () => {
  expect(
    favouritesReducer({
      items: ['id', 'otherId']
    }, {
      type: actionTypes.FETCH_FAVOURITES_SUCCESS,
      payload: ['id1']
    })).toEqual({
    items: ['id', 'otherId', 'id1'],
    loaded: true,
    isLoading: false
  })
});

it('should set state to loading when fetch request action dispatched', () => {
  expect(
      favouritesReducer({
        isLoading: false
      }, actions.fetchFavouritesRequest()))
    .toEqual({
      isLoading: true
    })
})