import axios from 'axios';
import { BASE_URL } from './config';

const endpoints = {
  browse: 'browse',
  item: id => `item/${id}`,
  favourite: 'favourite'
}

const http = axios.create({
  baseURL: BASE_URL
})

export function fetchItems({start = 0, limit = 9} = {}){
  return http.get(endpoints.browse, {
    params: {
      start,
      limit
    }
  })
}

export function fetchItem({id}){
  return http.get(endpoints.item(id))
}

export function fetchFavourites(){
  return http.get(endpoints.favourite);
}

export function addFavourite({id}){
  return http.post(endpoints.favourite, {
    id
  })
}

export function removeFavourite({id}){
  return http.delete(endpoints.favourite, {
    data: {
      id
    }
  })
}
