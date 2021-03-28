const CustomError = require("../extensions/custom-error");

module.exports = function repeater( str, options ) {
  //throw new CustomError('Not implemented');
  let repArr = [];
    let {
        repeatTimes = 0, separator = '+', addition = '', additionRepeatTimes = 0, additionSeparator = ''
    } = options;
    let addit = [];
    for (i = 0; i < (additionRepeatTimes || 1); i++) { 
        addit.push(addition + '');
    }
    let repAddit = addit.join(additionSeparator);
    str += repAddit;
    for (i = 0; i < (repeatTimes || 1); i++) {
        repArr.push(str);
    }
    let repStr = repArr.join(separator);

    return repStr;
};
  