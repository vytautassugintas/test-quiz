import itemsReducer from './items-reducer';
import actions from '../actions';

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
      start: 1,
      limit: 4,
      totalItems: 5
    })))
  .toEqual({
      isLoading: false,
      isLoadMoreVissible: true,
      items: [
        { id: '1' },
        { id: '2' }
      ],
      start: 1,
      limit: 4,
      totalItems: 5
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
      start: 1,
      limit: 4,
      totalItems: 5
    })))
  .toEqual({
      isLoading: false,
      isLoadMoreVissible: true,
      items: [
        { id: '777' },
        { id: '1' },
        { id: '2' }
      ],
      start: 1,
      limit: 4,
      totalItems: 5
    }
  )
})


it('should set isLoadMoreVissible to false', () => {
  expect(
    itemsReducer({
      isLoading: true,
      isLoadMoreVissible: true,
      items: [
        { id: '777' }
      ],
      totalItems: 0
    }, actions.fetchItemsSuccess({
      items: [
        { id: '1' },
        { id: '2' }
      ],
      start: 1,
      limit: 4,
      totalItems: 4
    })))
  .toEqual({
      isLoading: false,
      isLoadMoreVissible: false,
      items: [
        { id: '777' },
        { id: '1' },
        { id: '2' }
      ],
      start: 1,
      limit: 4,
      totalItems: 4
    }
  )
})
