const differenceBy = require('.');

describe('differenceBy', () => {

  test('returns array correctly with iteratee invoked', () => {
    const arrOne = [2.1, 1.2];
    const arrTwo = [2.3, 3.4];

    expect(differenceBy(arrOne, arrTwo, Math.floor)).toEqual([1.2]);
  });

  test('returns array correctly when using iteratee shorthand', () => {
    const arrOne = [{ 'x': 2 }, { 'x': 1 }];
    const arrTwo = [{ 'x': 1 }];

    expect(differenceBy(arrOne, arrTwo, 'x')).toEqual([{ 'x': 2 }]);
  });

});
