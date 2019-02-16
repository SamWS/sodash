/* This method is like _.find except that it returns the index of
 * the first element predicate returns truthy for instead of the
 * element itself.
 */

module.exports = function findIndex(arr, argument) {
    if (Object.prototype.toString.call(argument) === "[object Function]") {
        for (var i = 0; i < arr.length; i++) {
            if (argument(arr[i])) {
                return i
            }
        }
    }
    if (Object.prototype.toString.call(argument) === "[object Object]" ) {
        for (var i = 0; i < arr.length; i++) {
            if (JSON.stringify(arr[i]) === JSON.stringify(argument)) {
                return i
            }
        }
    }
    if (Object.prototype.toString.call(argument) === "[object Array]" ) {
        const objProperty = argument[0];
        const objValue = argument[1];

        for (var i = 0; i < arr.length; i++) {
            if (arr[i][objProperty] === objValue) {
                return i
            }
        }
    }

    return -1;
};


