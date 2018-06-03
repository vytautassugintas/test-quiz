import {
  FETCH_ITEMS_REQUEST,
  FETCH_ITEMS_FAILURE,
  FETCH_ITEMS_SUCCESS,
  FETCH_ITEM_REQUEST,
  FETCH_ITEM_FAILURE,
  FETCH_ITEM_SUCCESS
} from './action-types'

import * as api from '../../api'

export const fetchItemsRequest = () => ({
  type: FETCH_ITEMS_REQUEST
})

export const fetchItemsFailure = reason => ({
  type: FETCH_ITEMS_FAILURE,
  reason
})

export const fetchItemsSuccess = payload => ({
  type: FETCH_ITEMS_SUCCESS,
  payload
})

export function fetchItems({start = 0, limit = 9} = {}){
  return function(dispatch) {
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

export const fetchItemRequest = () => ({
  type: FETCH_ITEM_REQUEST
})

export const fetchItemFailure = reason => ({
  type: FETCH_ITEM_FAILURE,
  reason
})

export const fetchItemSuccess = payload => ({
  type: FETCH_ITEM_SUCCESS,
  payload
})

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
