/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n) {
    let result = [];
    for (let i = 1; i <= n; i++) {
        let current = '';
        if (i % 3 === 0) {
            current += 'Fizz';
        }
        if (i % 5 === 0) {
            current += 'Buzz';
        }
        if (!current.length) {
            current = i.toString();
        }
        result.push(current)

    }
    return result;
};
console.log(fizzBuzz(15));