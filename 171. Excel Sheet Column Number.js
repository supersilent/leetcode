/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function (s) {
    let result = 0;

    result += s.charCodeAt(s.length - 1) - 'A'.charCodeAt(0) + 1
    s = s.slice(0, s.length - 1)
    if (s.length) {
        result += 26 * titleToNumber(s);
    }

    return result;
};

console.log(titleToNumber("A"));
console.log(titleToNumber("AB"));