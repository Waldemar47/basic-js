
module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
    let turnsOption = 2**disksNumber - 1;
    return {
      turns: turnsOption,
      seconds: turnsOption / (turnsSpeed / 3600)
    };
  }
