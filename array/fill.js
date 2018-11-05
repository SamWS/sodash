/* CFills elements of array with value from start up to, but not including, end. */

module.exports = function fill(arr, val, start = 0, end = arr.length) {
  for (var i = start; i < end; i++) {
    arr[i] = val;
  }
  return arr;
};
