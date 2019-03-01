const findIndex = require('.');

describe('findIndex', () => {
    const users = [
        { 'user': 'barney',  'active': false },
        { 'user': 'fred',    'active': false },
        { 'user': 'pebbles', 'active': true }
    ];

    it('returns the index of the first truthy element', () => {
        const findBarney = o => o.user === 'barney';

       expect(findIndex(users, findBarney)).toBe(0);
    });

    it('returns correct index when iteratee shorthand is passed in', () => {
        const fred = { 'user': 'fred', 'active': false };

        expect(findIndex(users, fred)).toBe(1);
    });

    it('can correctly return index if array of properties is passed', () => {
       const notActive = ['active', false];

       expect(findIndex(users, notActive)).toBe(0);
    });

});
