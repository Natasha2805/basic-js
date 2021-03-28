const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  //throw new CustomError('Not implemented');
  let res = {}
  res.turns = (2**disksNumber)-1;
  res.seconds = Math.floor((3600/turnsSpeed)*res.turns);
 
  return res; 
};
