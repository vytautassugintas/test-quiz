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
  api.fetchItems({start: 1, limit: 5});
  expect(axiosMock.get).toHaveBeenCalledWith('browse', {
    params: {
      start: 1,
      limit: 5
    }
  });
})

it('should call item endpoint with the given item id ', () => {
  api.fetchItem({id: 'random_id'});
  expect(axiosMock.get).toHaveBeenCalledWith('item/random_id');
})
