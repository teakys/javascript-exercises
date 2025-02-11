const removeFromArray = function(array, ...remove) {
    let result = array;
    for (i in remove) { 
    result = array.filter((item) => item !== remove[i]);
    }
    return idfk;
}


// const removeFromArray = function(array, remove) {
//     let arr = []; 
//     for (let i = 1;i <= array.length;i++) {
//         if (i !== remove) {
//         arr.push(i);
//         }
//     }
//     return arr;
// };
console.log(removeFromArray([1, 2, 3, 4], 4, 3));
// Do not edit below this line
module.exports = removeFromArray;

