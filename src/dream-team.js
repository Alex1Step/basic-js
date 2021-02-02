const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!(members instanceof Array)) return false
  let result = []
  members.forEach(element => {
    if (typeof element === 'string') {
      result.push(element.trim()[0])
    }
  });
  return result.join("").toUpperCase().split("").sort().join("")
};