import * as actionTypes from './action-types'
import * as api from '../../api'

export const fetchItemsRequest = () => ({
  type: actionTypes.FETCH_ITEMS_REQUEST
})

export const fetchItemsFailure = reason => ({
  type: actionTypes.FETCH_ITEMS_FAILURE,
  reason
})

export const fetchItemsSuccess = payload => ({
  type: actionTypes.FETCH_ITEMS_SUCCESS,
  payload
})

export const fetchItemRequest = () => ({
  type: actionTypes.FETCH_ITEM_REQUEST
})

export const fetchItemFailure = reason => ({
  type: actionTypes.FETCH_ITEM_FAILURE,
  reason
})

export const fetchItemSuccess = payload => ({
  type: actionTypes.FETCH_ITEM_SUCCESS,
  payload
})

export const fetchFavouritesRequest = () => ({
  type: actionTypes.FETCH_FAVOURITES_REQUEST
})

export const fetchFavouritesSuccess = payload => ({
  type: actionTypes.FETCH_FAVOURITES_SUCCESS,
  payload
})

export function fetchItems({start = 0, limit = 9} = {}){
  return function (dispatch) {
    dispatch(fetchItemsRequest())
    return api.fetchItems({start, limit})
      .then(response => {
        dispatch(fetchItemsSuccess(Object.assign(
          response.data, {
            start,
            limit
          })))
      })
      .catch(reason => {
        dispatch(fetchItemsFailure(reason.data))
      })
  }
}

export function fetchItem(id = {}){
  return function(dispatch) {
    dispatch(fetchItemRequest())
    return api.fetchItem({id: id})
      .then(response => {
        dispatch(fetchItemSuccess(response.data))
      })
      .catch(reason => {
        dispatch(fetchItemFailure(reason.data))
      })
  }
}

export function fetchFavourites(){
  return function(dispatch) {
    dispatch(fetchFavouritesRequest())
    api.fetchFavourites()
      .then(response => { 
        dispatch(fetchFavouritesSuccess(response.data))
      })
  }
}

export const addFavourite = id => {
  return function (dispatch) {
    api.addFavourite({id})
      .then(() => {
        dispatch({
          type: actionTypes.ADD_FAVOURITE,
          id
        })
      })
  }
}

export const removeFavouriteById = id => {
  return function(dispatch) {
    api.removeFavourite({id})
      .then(() => {
        dispatch(({
          type: actionTypes.REMOVE_FAVOURITE,
          id
        }))
      })
  }
}
