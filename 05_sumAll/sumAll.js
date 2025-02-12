const sumAll = function(x, y) {
    let sum = 0;
    if (x < 0|y < 0) return 'ERROR'; 
    else if (!Number.isInteger(x)|!Number.isInteger(y)) return 'ERROR';
    else if(x < y) {
        for (;x <= y;x++) {
            sum += x;
        }
    } else {
        for (;y <= x;y++) {
            sum += y;
        }
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
