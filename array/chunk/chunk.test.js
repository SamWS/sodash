const chunk = require('.');

describe('chunk', () => {

  test('it chunks array with an even number', () => {
    const chunkedArr = [['a', 'b'], ['c', 'd']];

    expect(chunk(['a', 'b', 'c', 'd'], 2)).toEqual(chunkedArr);
  });

  test('it chunks array with odd number', () => {
    const chunkedArr = [['a', 'b', 'c'], ['d']];

    expect(chunk(['a', 'b', 'c', 'd'], 3)).toEqual(chunkedArr);
  });

  test('it chunks an array with a nested array', () => {
    const chunkedArr = [ [ 1, 2 ], [ 3, [ 4, 5, 6 ] ], [ 5, 6 ], [ 7, 8 ], [ 9, 10 ], [ 11 ] ];

    expect(chunk([1,2,3,[4, 5, 6],5,6,7,8,9,10,11], 2)).toEqual(chunkedArr);
  });

});
