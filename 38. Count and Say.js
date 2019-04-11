/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
    let current = '1';
    while (--n) {
        current = convert(current);

        function convert(word) {
            let convertedWord = '';
            while (word.length) {
                let char = word[0];
                let index = 1;
                let count = 1
                while (char === word[index]) {
                    count++;
                    index++
                }
                convertedWord += count + char;
                word = word.slice(index);
            }
            return convertedWord;
        }
    }
    return current;
};

console.log(countAndSay(4));