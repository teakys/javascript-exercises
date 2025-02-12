const sumAll = function(min, max) {
    let sum = 0;
    if (min < 0|max < 0) return 'ERROR'; 
    if (!Number.isInteger(min)|!Number.isInteger(max)) return 'ERROR';
    if (min > max) [min, max] = [max, min];
    for (;min <= max;min++) {
        sum += min;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
