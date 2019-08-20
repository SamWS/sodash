/* Gets the element at index n of array. If n is negative, 
 * the nth element from the end is returned.
 */

module.exports = function nth(arr, num) {
  return num >= 0 ? arr[num] : arr[(arr.length) - Math.abs(num)];
};
