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
        const props = argument[0];
        const value = argument[1];
        const obj = { props: value };
        return obj
        for (var i = 0; i < arr.length; i++) {
            if (JSON.stringify(arr[i]) === JSON.stringify(obj)) {
                return i
            }
        }
    }

    return -1;
};


