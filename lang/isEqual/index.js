/* Performs a deep comparison between two values to
 * determine if they are equivalent.
 */

module.exports = function isEqual(value, other) {
  if (Object.prototype.toString.call(value) === "[object Object]"
      && Object.prototype.toString.call(other) === "[object Object]") {
        const sortedValue = Object.keys(value).sort((a, b) => value[a] - value[b]);
        const sortedOther = Object.keys(other).sort((a, b) => other[a] - other[b]);

        return JSON.stringify(sortedValue) === JSON.stringify(sortedOther);
  };

  if (Object.prototype.toString.call(value) === "[object Array]"
      && Object.prototype.toString.call(other) === "[object Array]") {
        const sortedValue = value.sort((a, b) => a - b);
        const sortedOther = other.sort((a, b) => a - b);

        return JSON.stringify(sortedValue) === JSON.stringify(sortedOther);
      }

  return value === other;
};
