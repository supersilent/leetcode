/**
 * @param {string} S
 * @return {string}
 */
var removeOuterParentheses = function (S) {
    let count = 0;
    let prevCount = 0
    let result = "";
    for (let i = 0; i < S.length; i++) {
        prevCount = count;
        if (S[i] === "(") {
            count++
        } else {
            count--;
        }
        if (count !== 0 && prevCount !== 0) {
            result += S[i]
        }
    }

    return result;
};

console.log(removeOuterParentheses("(()())(())"));