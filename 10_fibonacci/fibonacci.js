const fibonacci = function(int) {
    if (int < 0) return 'OOPS'
    let sequence = [];
    sequence[0] = 0;
    sequence[1] = 1;
    for (let i = 2; i < 30; i++) {
        sequence.push(+(sequence[i-1])+(+sequence[i-2]));
    }
    return sequence[int];
};
console.log(fibonacci(4));
// Do not edit below this line
module.exports = fibonacci;
