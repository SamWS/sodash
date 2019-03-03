/* This method is like _.intersection except that it accepts iteratee
 * which is invoked for each element of each arrays to generate the
 * criterion by which they're compared. The order and references of
 * result values are determined by the first array. The iteratee is
 * invoked with one argument: (value). 
 */

module.exports = function intersectionBy(arr1, arr2, iter) {
  const intersectedArray = [];
  if (Object.prototype.toString.call(iter) === "[object Function]") {
    for (var i = 0; i < arr1.length; i++) {
      for (var j = 0; j < arr2.length; j++) {
        if (Object.prototype.toString.call(iter) === "[object Function]") {
          if (iter(arr1[i]) === iter(arr2[j]) && !intersectedArray.includes(arr1[i])) {
            intersectedArray.push(arr1[i]);
          }
        }
      }
    }
  } else if (Object.prototype.toString.call(iter) === "[object String]") {
    for (var i = 0; i < arr1.length; i++) {
      for (var j = 0; j < arr2.length; j++) {
        if (arr1[i][iter] === arr2[j][iter] && !intersectedArray.includes(arr1[i])) {
          intersectedArray.push(arr1[i]);
        }
      }
    }
  } else {
    return null;
  }


  return intersectedArray;
};
