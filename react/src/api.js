import axios from 'axios';
import { BASE_URL } from './config';

const endpoints = {
  browse: 'browse',
  item: id => `item/${id}`
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
