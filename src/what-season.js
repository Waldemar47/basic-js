module.exports = function getSeason(/* date */) {
  throw 'Not implemented';
  // remove line with error and write your code here
};
module.exports = function getSeason(date) {
  if (!date instanceof Date) throw Error; 
  let dateTwo = new Date(); 
  if (date - dateTwo == 0 || date == undefined) return 'Unable to determine the time of year!';
  tem = date.getMonth(); 
  if (tem == 11 || tem == 0 || tem == 1) return "Winter";
  if (tem == 2 || tem == 3 || tem == 4) return "Spring";
  if (tem == 5 || tem == 6 || tem == 7) return "Summer"; 
  if (tem == 8 || tem == 9 || tem == 10) return "Autumn";
};
