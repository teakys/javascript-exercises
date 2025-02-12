
const palindromes = function (str) {
    let splitReverse = str.split('').reverse().toString().replace(/[,.! ]/g, "").toLowerCase();
    let strFinal = str.split('').toString().replace(/[,.! ]/g, "").toLowerCase();
    if (splitReverse == strFinal) return true;
    else return false
//return splitReverse

}
//acaramanamaraca
//const palindromes = function (str) {
//    let splitReverse = (str.split('').filter((letter) => (letter !== ","|letter !== "."|letter !== " ")).reverse()).toString();
//    return splitReverse;
//    if (splitReverse.toLowerCase() == string.toLowerCase()) return true;
//};
// Do not edit below this line
module.exports = palindromes;
