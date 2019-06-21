/* This method is like _.indexOf except that it iterates over
 * elements of array from right to left.
 */

module.exports = function lastIndexOf(arr, val, fromIndex) {
  const startingIndex = fromIndex !== undefined ? fromIndex : arr.length;
  for (var i = startingIndex; i >= 0; i--) {
    if (arr[i] === val) {
      return i;
    }
  }

  return -1;
};
