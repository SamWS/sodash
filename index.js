// Main js file.
const chunk = require('./array/chunk');
const compact = require('./array/compact');
const concat = require('./array/concat');

const sodash = {
  chunk,
  compact,
  concat
};

console.log(sodash.chunk([1,2,3,4,5,6,7,8,9,10,11], 2));
console.log(sodash.compact([1, 'sam', false, 0, undefined, null, 2]));
console.log(sodash.concat([1], 2, [3], [[4]]));
