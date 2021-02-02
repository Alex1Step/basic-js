const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  //not Array
  if (!Array.isArray(arr)) throw new Error ('Error');
  //empty Array
  if (arr.length == 0) return [];
  //if haven`t controls
  let result = [];
  result  = arr.filter(value => value == '--discard-next' || value == '--discard-prev' ||
  value == '--double-prev' || value == '--double-next');
  if (result.length == 0) return arr;
  //main variant
  const resultArr = arr.reduce((temp, num, i) => {
    if (arr[i - 1] === '--discard-next') return temp
    if (arr[i - 1] === '--double-next') temp.push(arr[i])
    if (arr[i + 1] === '--double-prev') temp.push(arr[i])
    if (arr[i + 1] === '--discard-prev') return temp
    if (num === '--discard-next'
      || num === '--double-prev'
      || num === '--double-next'
      || num === '--discard-prev') {
      return temp
    }
    temp.push(arr[i])
    return temp
  }, [])
  return resultArr
};
