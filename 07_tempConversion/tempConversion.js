const convertToCelsius = function(Fahr) {
  return Math.round((Fahr - 32) * (5 / 9) * 10) / 10;  
};

const convertToFahrenheit = function(Cels) {
  return Math.round(((Cels * 9) / 5 + 32) * 10) / 10; 
}
console.log(convertToCelsius(32));
console.log(convertToCelsius(100));

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
