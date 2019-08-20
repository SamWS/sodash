const nth = require('.');

describe('nth', () => {
  const array = ['a', 'b', 'c', 'd'];

  it('should return correct value from the right index', () => {
    expect(nth(array, 1)).toEqual('b');
  });

  it('should return correct value when passed negative index', () => {
    expect(nth(array, -2)).toEqual('c');
  })

  it('should return undefined if index not found', () => {
    expect(nth(array, 100)).toBeUndefined();
  })

  it('should return undefined if negative index not found', () => {
    expect(nth(array, -100)).toBeUndefined();
  })
});
