const difference = require('.');

describe('difference', () => {
  const arrOne = [2, 1];

  test('returns an array of values not included in second array', () => {
    const arrTwo = [2, 3];

    expect(difference(arrOne, arrTwo)).toEqual([1]);
  });

  test('returns an empty array if all values are included', () => {
    const arrTwo = [2, 3, 1];

    expect(difference(arrOne, arrTwo)).toEqual([]);
  });

  test('removes nothing if no values are matched', () => {
    const arrTwo = [3, 4, 5];

    expect(difference(arrOne, arrTwo)).toEqual(arrOne);
  });

});
