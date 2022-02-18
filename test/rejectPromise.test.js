const { rejectPromise, onReject } = require('../rejectPromise');

describe('rejectPromise function', () => {
  it('should return rejected', () => rejectPromise().catch((error) => {
    expect(error).toBe('REJECTED!');
  }));
});
describe('onReject function', () => {
  it('should print the argument passed to it', () => {
    const spy = jest.spyOn(console, 'log');
    onReject('error');
    expect(spy).toBeCalledTimes(1);
  });
});
