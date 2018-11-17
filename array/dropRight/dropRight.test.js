const dropRight = require('.');

describe('dropRight', () => {
  const arrOne = [1, 2, 3];

  test('drops last element in array if no length is passed in', () => {
    expect(dropRight(arrOne)).toEqual([1, 2]);
  });

  test('correctly drops from the end the amount passed in', () => {
    expect(dropRight(arrOne, 2)).toEqual([1]);
  });

  test('returns empty array if length passed in is longer than array', () => {
    expect(dropRight(arrOne, 5)).toEqual([]);
  });

  test('nothing is removed from array if zero is passed in', () => {
    expect(dropRight(arrOne, 0)).toEqual(arrOne);
  });

});
