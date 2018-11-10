const concat = require('.');

describe('concat', () => {
  const arr = [1];

  test('arrays are successfully concatenated', () => {
    const concatArr = [1, 2, 3, 4];

    expect(concat(arr, 2, [3], 4)).toEqual(concatArr);
  });

  test('it only concatenates one level deep', () => {
    const concatArr = [1, 2, 3, [4]];

    expect(concat(arr, 2, [3], [[4]])).toEqual(concatArr);
  });

});
