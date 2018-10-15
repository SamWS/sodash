/* This method is like _.difference except that it accepts iteratee
 * which is invoked for each element of array and values to generate
 * the criterion by which they're compared. The order and references ' +
 * 'of result values are determined by the first array. The iteratee ' +
 * 'is invoked with one argument: (value).
 */

module.exports = function differenceBy(arr1, arr2, iter) {
    const iteredArr2 = arr2.map(x => iter(x));
    return arr1.filter(x => {
      return iteredArr2.indexOf(iter(x)) === -1 ? x : null
    });
};
