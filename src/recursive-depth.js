const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let countArray = []
    if(Array.isArray(arr)){
      if (arr.length===0) return 1
      for (let i=0; i<arr.length; i++) {
        countArray[i] = this.calculateDepth(arr[i]) + 1
      }
      return countArray.sort( (a, b) => b-a )[0]
    } else return 0
  }
};

// let A = new DepthCalculator
// console.log(A.calculateDepth([1, [8, [[]]], 2, 3, [8, []], 4, 5, ['6575',['adas', ['dfg', [0]]]]]))