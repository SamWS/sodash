const fill = require('.');

describe('fill', () => {

    it('changes every array element', () => {
        const arrOne = [1, 2, 3];
        const arrA = ['a', 'a', 'a'];

        expect(fill(arrOne, 'a')).toEqual(arrA);
    });

    it('creates a new array fill with passed in element', () => {
        const arr2 = [2, 2, 2]; // d2

        expect(fill(Array(3), 2)).toEqual(arr2); // d2
    });

    it('only changes the elements between start and end index', () => {
        const arrOne = [4, 6, 8, 10];
        const arrTwo = [4, '*', '*', 10];

        expect(fill(arrOne, '*', 1, 3)).toEqual(arrTwo);
    });

});
