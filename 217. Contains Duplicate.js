/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
    let hashtable = {};
    for (const e of nums) {
        if (!hashtable[e]) {
            hashtable[e] = 1;
        } else {
            return true;
        }
    }
    return false;
};


console.log(containsDuplicate([1, 2, 3, 1]));
console.log(containsDuplicate([1, 2, 3, 4]));