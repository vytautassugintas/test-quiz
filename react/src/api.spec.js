import * as api from './api';
import axiosMock from 'axios';

afterEach(() => {
  axiosMock.get.mockReset();
})

it('should call browse endpoint with default params ', () => {
  api.fetchItems();
  expect(axiosMock.get).toHaveBeenCalledWith('browse', {
    params: {
      start: 0,
      limit: 9
    }
  });
})

it('should call browse endpoint with given params ', () => {
  api.fetchItems({
    start: 1,
    limit: 5
  });
  expect(axiosMock.get).toHaveBeenCalledWith('browse', {
    params: {
      start: 1,
      limit: 5
    }
  });
})

it('should call item endpoint with the given item id ', () => {
  api.fetchItem({
    id: 'random_id'
  });
  expect(axiosMock.get).toHaveBeenCalledWith('item/random_id');
})

it('should call favourites endpoint', () => {
  api.fetchFavourites();
  expect(axiosMock.get).toHaveBeenCalledWith('favourite');
})

it('should call favourite endpoint, but with post method and with id as req body', () => {
  api.addFavourite({
    id: 'id'
  });
  expect(axiosMock.post).toHaveBeenCalledWith('favourite', {
    id: 'id'
  });
})

it('should call favourite endpoint, but with delete method and with id as req data', () => {
  api.removeFavourite({
    id: 'id'
  });
  expect(axiosMock.delete).toHaveBeenCalledWith('favourite', {
    data: {
      id: 'id'
    }
  });
})