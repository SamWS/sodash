/* Creates a slice of array excluding elements dropped from the end.
 * Elements are dropped until predicate returns falsey.
 * The predicate is invoked with three arguments: (value, index, array).
 */

module.exports = function dropRightWhile(arr, predicate) {
  const newArr = [...arr];
  if (Object.prototype.toString.call(predicate) === "[object Function]") {
    newArr.reverse();
    for (var i = 0; i < newArr.length; i++) {
      while (predicate(newArr[i])) {
        newArr.splice(0, 1);
      }
    }
  }
  return newArr.reverse();
};
