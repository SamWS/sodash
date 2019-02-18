/* This method is This method is like _.findIndex except
 * that it iterates over elements of collection from
 * right to left.
 */

module.exports = function findLastIndex(arr, argument) {
  if (Object.prototype.toString.call(argument) === "[object String]") {
    for (var i = arr.length - 1; i >= 0; i--) {
      if (arr[i][argument]) {
        return i
      }
    }
  }
  if (Object.prototype.toString.call(argument) === "[object Function]") {
    for (var i = arr.length - 1; i >= 0; i--) {
      if (argument(arr[i])) {
        return i
      }
    }
  }
  if (Object.prototype.toString.call(argument) === "[object Object]" ) {
    for (var i = arr.length - 1; i >= 0; i--) {
      if (JSON.stringify(arr[i]) === JSON.stringify(argument)) {
        return i
      }
    }
  }
  if (Object.prototype.toString.call(argument) === "[object Array]" ) {
    const objProperty = argument[0];
    const objValue = argument[1];

    for (var i = arr.length - 1; i >= 0; i--) {
      if (arr[i][objProperty] === objValue) {
        return i
      }
    }
  }

  return -1;
};
