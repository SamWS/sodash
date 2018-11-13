const chunk = require('./array/chunk/index');
const compact = require('./array/compact/index');
const concat = require('./array/concat/index');
const difference = require('./array/difference/index');
const differenceBy = require('./array/differenceBy/index');
const drop = require('./array/drop/index');
const dropRight = require('./array/dropRight/index');
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
