const findLastIndex = require('.');

describe('findLastIndex', () => {
  const users = [
    { 'user': 'barney',  'active': true },
    { 'user': 'fred',    'active': false },
    { 'user': 'pebbles', 'active': false }
  ];

  it('returns the index of the first truthy element', () => {
    const findPebbles = o => o.user === 'pebbles';

    expect(findLastIndex(users, findPebbles)).toBe(2);
  });

  it('returns correct index when iteratee shorthand is passed in', () => {
    const barney = { 'user': 'barney', 'active': true };

    expect(findLastIndex(users, barney)).toBe(0);
  });

  it('can correctly return index if array of properties is passed', () => {
    const notActive = ['active', false];

    expect(findLastIndex(users, notActive)).toBe(2);
  });

  it('finds property iteratee shorthand', () => {
    expect(findLastIndex(users, 'active')).toBe(0);
  });

});
