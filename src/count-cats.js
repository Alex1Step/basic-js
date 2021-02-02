const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  // throw new CustomError('Not implemented');
  let counter = 0
  matrix.forEach(arr => {
    arr.forEach(el => {
      if (el==="^^") counter++
    });
  });

  return counter
};
