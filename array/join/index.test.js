const join = require('.');

describe('join', () => {

  it('should return a string joined by a seperator', () => {
    const arr = ['a', 'b', 'c'];

    expect(join(arr, '~')).toEqual('a~b~c');
  });

});
