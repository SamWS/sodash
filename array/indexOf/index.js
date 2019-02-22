/* Gets the index at which the first occurrence of value is
 * found in array using SameValueZero for equality comparisons.
 * If fromIndex is negative, it's used as the offset from the
 * end of array.
 */

module.exports = function indexOf(arr, value, fromIndex = 1) {
  let total = 1;

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      if (total === fromIndex) {
        return i
      } else {
        total += 1
      }
    }
  }


  return -1;
};
