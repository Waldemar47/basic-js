module.exports = class DepthCalculator {
    calculateDepth(arr) {
      let array = [1]; 
      if (Array.isArray(arr)) {
        for(let a = 0; a < arr.length; a++) {
          if(Array.isArray(arr[a])) {
            array.push(1 + this.calculateDepth(arr[a]));
          }
        }
      } 
      return Math.max(...array); 
    }
  };
