/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
    let hashtable = {};
    for (const char of s) {
        hashtable[char] ? hashtable[char]++ : hashtable[char] = 1;
    }
    for (let i = 0; i < s.length; i++) {
        if (hashtable[s[i]] === 1) return i;
    }
    return -1;
};

console.log(firstUniqChar("loveleetcode"));