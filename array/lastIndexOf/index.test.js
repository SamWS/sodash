const lastIndexOf = require('.');

describe('lastIndexOf', () => {
  const arr = [1, 2, 1, 2];

  it('should return correct index of value', () => {
    expect(lastIndexOf(arr, 2)).toEqual(3);
  });

  it('should return correct index value starting at specified index', () => {
    expect(lastIndexOf(arr, 2, 2)).toEqual(1);
  });

  it('should return -1 when no value found', () => {
    expect(lastIndexOf(arr, 5)).toEqual(-1);
  });

  it('should return correct index if starting index is 0', () => {
    expect(lastIndexOf(arr, 1, 0)).toEqual(0);
  });
});
