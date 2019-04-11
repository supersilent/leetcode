/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let currentMin = prices[0];
  let profit = 0;

  for (let i = 1; i < prices.length; i++) {
    if (currentMin > prices[i]) {
      currentMin = prices[i];
    } else if (currentMin < prices[i] && prices[i] - currentMin > profit) {
      profit = prices[i] - currentMin;
    }
  }

  return profit;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.log(maxProfit([7, 6, 4, 3, 1]));
