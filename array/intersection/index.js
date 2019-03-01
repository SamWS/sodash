/* Creates an array of unique values that are included in 
 * all given arrays using SameValueZero for equality comparisons. 
 * The order and references of result values are determined by 
 * the first array.
 */

module.exports = function intersection(arr1, arr2) {
  const intersectedArray = [];

  for (var i = 0; i < arr1.length; i++) {
    for (var j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j] && !intersectedArray.includes(arr1[i])) {
        intersectedArray.push(arr1[i]);
      }
    }
  }

  return intersectedArray;
}
