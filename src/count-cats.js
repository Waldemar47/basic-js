
module.exports = function countCats(matrix) {
  let count = 0;
  for(let a = 0; a < matrix.length; a++) {
    for(let b = 0; b < matrix[a].length; b++) {
      if (matrix[a][b] == "^^") {
        count++; 
      }
    }
  }
  return count;
};
