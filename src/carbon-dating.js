
const MODERN_ACTIVITY= 15; 
	const HALF_LIFE_PERIOD= 5730;
	

	module.exports = function dateSample(string) {
	  if (string == undefined || typeof string != "string") 
	    return false; 
	  let tem = parseFloat(string);
	  if (Number.isNaN(tem) || tem > 15 || tem <= 0)
	    return false; 
	  return Math.ceil(Math.log(MODERN_ACTIVITY / tem) / (0.693 / HALF_LIFE_PERIOD));
	};
