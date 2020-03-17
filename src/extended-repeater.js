
module.exports = function repeater(str, options) {
    str = String(str); 
    let string = "";
    if (options.repeatTimes === undefined) options.repeatTimes = 1; 
    if (options.separator === undefined) options.separator = '+'; 
    if (options.addition === undefined) options.addition = '';
    if (options.additionRepeatTimes === undefined) options.additionRepeatTimes = 1; 
    if (options.additionSeparator === undefined) options.additionSeparator = '|';
    options.addition = String(options.addition);
  

    for(let a = 0 ; a < options.repeatTimes; a++) {
      string += str; 
      for(let b = 0 ; b < options.additionRepeatTimes - 1; b++) {
        string += options.addition;
        string += options.additionSeparator;
      }
      string += options.addition; 
      string += options.separator; 
    }
    return string.slice(0, -options.separator.length); 
  };
