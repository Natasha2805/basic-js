//const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  //throw new CustomError('Not implemented');
  // remove line with error and write your code here
  if (!Array.isArray(arr)) {
    throw new Error;
}

if (!arr.length) {
    return [];
}

let newarr = [];

for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
        case '--discard-next': {
            i++;
            break;
        }
        case '--discard-prev': {
            if (newarr.length > 0) {
                newarr.pop();
            }
            break;
        }
        case '--double-next': {
            if (i < arr.length - 1) {
                newarr.push(arr[i + 1]);
            }
            break;    
        }
        case '--double-prev': {
            if (i > 0) {
                newarr.push(arr[i - 1]);
            }
            break;
        }
        default: {
            newarr.push(arr[i]);
            break;
        }
    }
}

return newarr;
};
