/* This method is like _.difference except that it accepts iteratee
 * which is invoked for each element of array and values to generate
 * the criterion by which they're compared. The order and references ' +
 * 'of result values are determined by the first array. The iteratee ' +
 * 'is invoked with one argument: (value).
 */

module.exports = function differenceBy(arr1, arr2, iter) {
    const iteredArr2 = arr2.map(x => {
      if (Object.prototype.toString.call(x) === "[object Object]") {
        return JSON.stringify(x);
      } else if (Object.prototype.toString.call(iter) === "[object Function]") {
        return iter(x)
      } else {
        return x
      }
    });
    return arr1.filter(x => {
      if (Object.prototype.toString.call(x) === "[object Object]") {
        return iteredArr2.indexOf(JSON.stringify(x)) === -1 ? x : null
      } else if (Object.prototype.toString.call(iter) === '[object Function]') {
        return iteredArr2.indexOf(iter(x)) === -1 ? x : null
      } else {
        return iteredArr2.indexOf(x) === - 1 ? x : null
      }
    });
};
