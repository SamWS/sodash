const intersection = require('.');

describe('intersection', () => {

  it('should return correct array', () => {
    expect(intersection([2, 1], [2, 3])).toEqual([2]);
  });

  it('should return only unique values', () => {
    const arr1 = [2, 1, 2, 5, 4];
    const arr2 = [2, 3, 2, 5, 0];

    expect(intersection(arr1, arr2)).toEqual([2, 5]);
  });

  it('should return an empty array if no values intersect', () => {
    const arr1 = [1, 2, 3];
    const arr2 = [4, 5, 6];
    
    expect(intersection(arr1, arr2)).toEqual([]);
  });

});
