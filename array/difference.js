/* Creates an array of array values not included in the other given arrays
 * using SameValueZero for equality comparisons. The order and references
 * of result values are determined by the first array.
 */

module.exports = function difference(arr1, arr2) {
  return arr1.filter(x => (
    arr2.indexOf(x) === -1 ? x : null
  ));
};
