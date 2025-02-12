const convertToCelsius = function(tF) {
    let result = (tF - 32) * (5/9);
    return ((Math.ceil(result * 10))/10);
};

const convertToFahrenheit = function(tC) {
    let resultC = (tC * (9/5) + 32); 
    return ((Math.ceil(resultC * 10))/10);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
