const drop = require('.');

describe('drop', () => {
  const arrOne = [1, 2, 3];

  test('drops first element in array if no length is passed in', () => {
    expect(drop(arrOne)).toEqual([2, 3]);
  });

  test('correctly drops amount passed in', () => {
    expect(drop(arrOne, 2)).toEqual([3]);
  });

  test('returns empty array if length passed in is longer than array', () => {
    expect(drop(arrOne, 5)).toEqual([]);
  });

  test('nothing is removed from array if zero is passed in', () => {
    expect(drop(arrOne, 0)).toEqual(arrOne);
  })

});
