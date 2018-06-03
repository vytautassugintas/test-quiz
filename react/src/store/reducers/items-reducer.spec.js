import itemsReducer from './items-reducer';
import * as actions from '../actions/actions';

it('should set state to loading when fetch request action dispatched', () => {
  expect(
    itemsReducer({
      isLoading: false
    }, actions.fetchItemsRequest()))
  .toEqual({
      isLoading: true
    }
  )
})

it('should update error and set loading to false if request failure dispatched', () => {
  expect(
    itemsReducer({
      isLoading: true,
      error: undefined
    }, actions.fetchItemsFailure('Error')))
  .toEqual({
      isLoading: false,
      error: 'Error'
    }
  )
})

it('should update items and set loading to false when request success dispatched', () => {
  expect(
    itemsReducer({
      isLoading: true,
      items: [],
      totalItems: 0
    }, actions.fetchItemsSuccess({
      items: [
        { id: '1' },
        { id: '2' }
      ],
      totalItems: 3
    })))
  .toEqual({
      isLoading: false,
      items: [
        { id: '1' },
        { id: '2' }
      ],
      totalItems: 3
    }
  )
})

it('should update items by adding them to the current state items, instead of overiding them', () => {
  expect(
    itemsReducer({
      isLoading: true,
      items: [
        { id: '777' }
      ],
      totalItems: 0
    }, actions.fetchItemsSuccess({
      items: [
        { id: '1' },
        { id: '2' }
      ],
      totalItems: 3
    })))
  .toEqual({
      isLoading: false,
      items: [
        { id: '777' },
        { id: '1' },
        { id: '2' }
      ],
      totalItems: 3
    }
  )
})
