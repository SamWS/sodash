const chunk = require('./array/chunk/index');
const compact = require('./array/compact/index');
const concat = require('./array/concat');
const difference = require('./array/difference');
const differenceBy = require('./array/differenceBy');
const drop = require('./array/drop');
const dropRight = require('./array/dropRight');
const dropRightWhile = require('./array/dropRightWhile');
const fill = require('./array/fill');

const sodash = {
  chunk,
  compact,
  concat,
  difference,
  differenceBy,
  drop,
  dropRight,
  dropRightWhile,
  fill
};

module.exports = sodash;
