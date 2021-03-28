const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  //throw new CustomError('Not implemented');
  if (Array.isArray(members) == false) {
    return false;
  }
  let newarr= [];
  for (let element of members) {
    if (typeof element == 'string') {
      let newStr = element.trim();
      newarr.push(newStr[0].toUpperCase());
    }
  };
  return newarr.sort().join('');
};
