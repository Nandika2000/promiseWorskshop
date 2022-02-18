const promise = require('../fulfillPromise');

describe('promise funtion', () => {
  it('should return fulfilled', () => promise().then((data) => {
    expect(data).toBe('FULFILLED!');
  }));
});
