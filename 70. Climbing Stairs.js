/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  if (n < 3) {
    return n;
  }
  let index = 2,
    value1 = 1,
    value2 = 2;

  while (n !== index++) {
    [value1, value2] = [value2, value1 + value2];
  }
  return value2;
};

console.log(climbStairs(2));
console.log(climbStairs(3));
console.log(climbStairs(4));
console.log(climbStairs(5));
console.log(climbStairs(44));
