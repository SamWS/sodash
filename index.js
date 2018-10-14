// Main js file.
const chunk = require('./array/chunk');
const compact = require('./array/compact');
const concat = require('./array/concat');
const difference = require('./array/difference');
const differenceBy = require('./array/differenceBy');
const drop = require('./array/drop');

const sodash = {
  chunk,
  compact,
  concat,
  difference,
  differenceBy,
  drop
};

module.exports = sodash;
