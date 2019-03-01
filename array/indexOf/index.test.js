const indexOf = require('.');

describe('indexOf', () => {

  const simpleArray = [1, 2, 1 ,2];

  it('should return first index if no fromIndex is passed in', () => {
    expect(indexOf(simpleArray, 2)).toBe(1);
  });

  it('should return correct index when fromIndex is passed in', () => {
    expect(indexOf(simpleArray, 2, 2)).toBe(3);
  });

  it('should return -1 when item is not found', () => {
    expect(indexOf(simpleArray, 2, 3)).toBe(-1);
  });

});
