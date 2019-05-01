const last = require('.');

describe('last', () => {

  it('should return last element in the array', () => {
    const arr = ['a', 'b', 'c'];

    expect(last(arr)).toEqual('c');
  });

});
