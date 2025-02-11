const reverseString = function(str) {
    let splitReverseString = str.split('').reverse();
    let strReverse = splitReverseString.join("");
    return strReverse;
};

// Do not edit below this line
module.exports = reverseString;