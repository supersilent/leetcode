/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
    n = n.toString();
    let hashtable = {}
    hashtable[n] = true
    while (n !== 1) {
        let sum = n.split('').map(num => Math.pow(num, 2)).reduce((a, b) => a + b)
        if (sum === 1) {
            return true;
        }
        if (hashtable[sum]) {
            return false;
        } else {
            hashtable[sum] = true;
        }
        n = sum.toString()
    }
};

console.log(isHappy(19));
console.log(isHappy(20));