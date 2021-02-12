const CustomError = require("../extensions/custom-error");

const chainMaker = {
  finishChainObj: [],
  getLength() {
    return this.finishChainObj.length
  },
  addLink(value) {
    value = String(value) ? `( ${String(value)} )` : '( )'
    this.finishChainObj.push(value)
    return this //chainMaker
  },
  removeLink(position) {
    if ((position-1 < 0) || (position-1 > this.finishChainObj.length-1) || (isNaN(position)) || (position - Math.floor (position) > 0) ) {
      this.finishChainObj = [];
      throw new Error ('Error');
    }
    this.finishChainObj.splice(position-1, 1)
    return this //chainMaker
  },
  reverseChain() {
    this.finishChainObj.reverse()
    return this //chainMaker
  },
  finishChain() {
    const resultString = this.finishChainObj.join('~~')
    // resultString += "( " + this.finishChainObj[0] + " )"
    // for (let i=1; i<this.finishChainObj.length; i++) {
    //   resultString += "~~( " + this.finishChainObj[i] + " )"
    // }
    this.finishChainObj = []
    return resultString
  }
};

module.exports = chainMaker;


