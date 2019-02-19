const head = require('.');

describe('head', () => {

  it('should return first element of an array', () => {
    const simpleArray = [1, 2, 3];

    expect(head(simpleArray)).toBe(1)
  })

  it('should return undefined if passed an empty array', () => {
    expect(head([])).toBeUndefined();
  })
  
});
