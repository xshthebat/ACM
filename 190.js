// 颠倒给定的 32 位无符号整数的二进制位。
// 输入: 43261596
// 输出: 964176192
var reverseBits = function(n) {
    let  str = null;
    let len = n.toString('2').length;
    str = len ===32?n.toString('2'):Array.apply(null, Array(32-len)).map(() => 0).join("")+n.toString('2');
    return parseInt(str.split("").reverse().join(""),2)
};
console.log(reverseBits(43261596)) 