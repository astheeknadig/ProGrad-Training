/**
 * @param {number} x
 * @return {number}
 */

var reverse = function(x) {
    var a = Math.abs(x);
    var b = Number(a.toString().split("").reverse().join(""));
    if ((b > Math.pow(2,31)) || (b < Math.pow(-2,31))) {return 0}
    return (x < 0 ? -1 : 1) * b
};
