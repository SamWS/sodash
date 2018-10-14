/* This method is like _.difference except that it accepts comparator
 * which is invoked to compare elements of array to values. The order
 * and references of result values are determined by the first array.
 * The comparator is invoked with two arguments: (arrVal, othVal).
 */

module.exports = function drop(arr, amount = 1) {
    const newArr = [...arr];
    newArr.splice(0, amount);
    return newArr;
};
