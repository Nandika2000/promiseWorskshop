const warmUp = require('../warmUp');

describe('warmup function', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });
  it('should print TIMED OUT! after 2 secs when warmUp is called', () => {
    jest.spyOn(global, 'setTimeout');
    warmUp();
    expect(setTimeout).toHaveBeenCalledTimes(1);
  });
});
