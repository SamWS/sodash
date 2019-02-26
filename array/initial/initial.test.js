const initial = require('.');

describe('initial', () => {
  const simpleArray = [1, 2, 3];

  it('should return all but the last element of the array', () => {
    expect(initial(simpleArray)).toEqual([1, 2])
  });

  it('should not alter the origin array', () => {
    initial(simpleArray);

    expect(simpleArray).toEqual([1, 2, 3]);
  });
  
});
