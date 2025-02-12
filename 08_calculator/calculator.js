const add = function(intX, intY) {
    return intX + intY;
};

const subtract = function(intX, intY) {
    return intX - intY;
};

const sum = function(numbers) {
    let sum = 0;
    for (number of numbers) {
        sum += number;
    }
    return sum;
};

const multiply = function(numbers) {
    let result = 1;
    for (number of numbers) {
        result *= number;
    }
    return result
};

const power = function(base, exponent) {
    let result = 1;
    for (let i = 0;i < exponent;i++) {
        result *= base;
    }
    return result;
};

const factorial = function(integer) {
    if (integer === 0) return 1;
    for (let i = integer -1;i > 0;i--) {
        integer *= i;
    }
    return integer;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
