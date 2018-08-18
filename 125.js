var isPalindrome = function (s) {
   let b;
    b = s.replace(/[^0-9a-z]+/ig, "");
    b = b.toLowerCase();
    let old = b;
    b = b.split('').reverse().join('');
    return old ===b
};
console.log(isPalindrome("race a car"));