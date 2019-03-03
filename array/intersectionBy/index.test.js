const intersectionBy = require('.');

describe('intersectionBy', () => {

  it('should return correct array', () => {
    const arr1 = [2.1, 1.2];
    const arr2 = [2.3, 3.4];

    expect(intersectionBy(arr1, arr2, Math.floor)).toEqual([2.1]);
  });

  it('should return correct object', () => {
    expect(intersectionBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x')).toEqual([{ 'x': 1}]);
  });

  it('should return an empty array if no values intersect', () => {
    const arr1 = [1, 2, 3];
    const arr2 = [4, 5, 6];
    
    expect(intersectionBy(arr1, arr2, Math.floor)).toEqual([]);
  });

  it('should return null if iter is not passed in', () => {
    expect(intersectionBy([1], [2])).toBeNull();
  });

});
