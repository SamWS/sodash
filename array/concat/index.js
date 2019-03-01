/* Creates a new array concatenating array with any additional arrays and/or values. */

module.exports = function concat(arr) {
  const copyArgs = [...arguments];
  let first = copyArgs[0];
  const allNeededArgs = copyArgs.slice(1);
  for (var i = 0; i < allNeededArgs.length; i++) {
    first = first.concat(allNeededArgs[i])
  }
  return first
};
