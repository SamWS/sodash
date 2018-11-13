/* Creates a slice of array with n elements dropped from the end. */

module.exports = function dropRight(arr, amount = 1) {
  const newArr = [...arr].reverse();
  newArr.splice(0, amount);
  return newArr.reverse();
};
