const isEqual = require('.');

describe('isEqual', () => {

  it('returns true for equal parameters', () => {
    const obj = { a: 1 };
    const other = { a: 1 };

    expect(isEqual(obj, other)).toBe(true);
  });

  it('returns true for an array', () => {
    const arr = [1, 2, 3, 4, 5];
    const other = [5, 4, 3, 2, 1];

    expect(isEqual(arr, other)).toBe(true);
  });

  it('returns true for multiple unsorted parameters', () => {
    const obj = { a: 1, b: 2};
    const other = { b: 2, a: 1};

    expect(isEqual(obj, other)).toBe(true);
  });

  it('returns true for matched strings', () => {
    const sam = "hello Sam";
    const againSam = "hello Sam";

    expect(isEqual(sam, againSam)).toBe(true);
  });

});
