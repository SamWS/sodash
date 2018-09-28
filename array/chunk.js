/* Chunk creates an array of elements split into groups the length
 * of 'size'. If array can't be split evenly, the final chunk
 * will be the remaining elements.
 */

module.exports = function chunk(arr, size) {
  const newArr = [...arr];
  const emptyArr = [];
  function chunkArray(arr) {
    if (arr.length === 0) return arr;
    const newArr = [...arr];
    const cutSize = newArr.splice(0, size);
    emptyArr.push(cutSize);
    return chunkArray(newArr);
  }
  chunkArray(newArr);
  return emptyArr;
};
