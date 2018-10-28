/* Creates a slice of array with n elements dropped from the beginning. */

module.exports = function drop(arr, amount = 1) {
    const newArr = [...arr];
    newArr.splice(0, amount);
    return newArr;
};
