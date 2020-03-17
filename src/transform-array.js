module.exports = function transform(arr) {
    if (!Array.isArray(arr)) throw Error; 
    if (arr.length == 0) return []; 
    let result = [];
    for(let a = 0; a < arr.length; a++) {
      if(arr[a] == "--discard-next") {
        if (a < arr.length - 1) {
          a++; 
        }
        continue;
      }
      if(arr[a] == "--discard-prev") {
        if (a > 0) {
          result.pop();
        }
        continue;
      }
      if(arr[a] == "--double-next") {
        if (a < arr.length - 1) {
          result.push(arr[a+1]);
        }
        continue;
      }
      if(arr[a] == "--double-prev") {
        if (a > 0) {
          result.push(arr[a-1]);
        }
        continue;
      }
      result.push(arr[a]);
    }
    return result;
  };
  