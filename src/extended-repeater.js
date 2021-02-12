const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  //validation
  if (!(str instanceof String)) str = String(str)
  if (options.addition === true ||
    options.addition === false ||
    options.addition === null) options.addition = String(options.addition)
  !options.repeatTimes ? options.repeatTimes=1 : null
  !options.separator ? options.separator='+' : null
  !options.addition ? options.addition='' : null
  !options.additionRepeatTimes ? options.additionRepeatTimes=1 : null
  !options.additionSeparator ? options.additionSeparator='|' : null

  let extraString = ''
  for (let i=0; i<options.additionRepeatTimes; i++) {
    if (i!==0) extraString+=options.additionSeparator
    extraString+=options.addition
  }

  let resultString = ''
  for (let j=0; j<options.repeatTimes; j++) {
    if (j!==0) resultString+=options.separator
    resultString+=(str+extraString)
  }

  return resultString
};
  


// console.log(repeater(9.234, { repeatTimes: 4, separator: '||', addition: {a: 5}, additionRepeatTimes: 3, additionSeparator: '&&' }));