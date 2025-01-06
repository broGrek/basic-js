const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let param = { 
    repeatTimes: 1, 
    separator: '+', 
    addition: '', 
    additionRepeatTimes: 1, 
    additionSeparator: '|',
    addTotalString: '',
    totalString: '',
  };

  if (str && param.addition !== typeof str && param.addition === 'string' || str && param.addition instanceof String) {
    str.toString();
    param.addition.toString();
  }

  if('repeatTimes' in options){
    param.repeatTimes = options['repeatTimes'];
  }
  if('separator' in options){
    param.separator = options['separator'];
  }

  if('additionRepeatTimes' in options){
    param.additionRepeatTimes = options['additionRepeatTimes'];
  }
  if('additionSeparator' in options){
    param.additionSeparator = options['additionSeparator'];
  }

  if('addition' in options){
    param.addition = options['addition'];
    for(let i = 0; i < param.additionRepeatTimes; i++){
      param.addTotalString = `${param.addTotalString}${param.addition}${param.additionSeparator}`
    }
    param.addTotalString = param.addTotalString.slice(0, -param.additionSeparator.length);
  }

  for(let i = 0; i < param.repeatTimes; i++){
    param.totalString = `${param.totalString}${str}${param.addTotalString}${param.separator}`
  }
  param.totalString = param.totalString.slice(0, -param.separator.length);

  return param.totalString;

}

module.exports = {
  repeater
};
