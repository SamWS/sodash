/*  Compact removes all falsey items from an array. */

module.exports = function compact(arr) {
  return arr.filter(Boolean);
};
