const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth( arr) {
    //throw new CustomError('Not implemented');
    // remove line with error and write your code here
    if (Array.isArray(arr)) {
      let depth = arr.reduce((maxDepth, element) => {
          return Math.max(this.calculateDepth(element), maxDepth);
      }, 0);
      return depth + 1;
  } else return 0;
}
}
