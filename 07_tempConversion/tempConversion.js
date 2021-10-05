const ftoc = function(faran) {
  let ansInCels = (faran - 32) * (5 / 9);
  let result = Math.round(ansInCels * 10) /10  ;
  console.log(result + " Celsius");
  return result;
};

const ctof = function(cels) {
  let ansInFaran = cels * 1.8 + 32
  result = Math.round(ansInFaran * 10) /10;
  
  console.log(result + " Fahrenheit");
  return result;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
