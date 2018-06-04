export default {
  get: jest.fn((url) => {
    if (url === '/browse') {
      return Promise.resolve({
        data: 'data'
      });
    }
    return Promise.resolve({
      data: 'data'
    });
  }),
  post: jest.fn((url) => {
    return Promise.resolve({
      data: 'data'
    });
  }),
  delete: jest.fn((url) => {
    return Promise.resolve({
      data: 'data'
    });
  }),
  create: jest.fn(function () {
    return this;
  })
};