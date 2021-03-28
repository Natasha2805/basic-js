const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  /*throw new CustomError('Not implemented');*/
 
   if (typeof sampleActivity == "string") {
    let num = parseFloat(sampleActivity);
    if (!isNaN(num) && num != undefined 
    && num > 0 && num <= 15) {
      return Math.ceil(Math.log(MODERN_ACTIVITY/num)/0.693*HALF_LIFE_PERIOD);
    } 
    else return false;
  } 
  else return false;
};
