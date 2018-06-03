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
  create: jest.fn(function () {
    return this;
  })
};