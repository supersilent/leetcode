/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function (n) {
    if (n < 3) return 0;
    if (n === 3) return 1;
    if (n === 4) return 2;
    let primes = []
    let delta = 2;
    let candidate = 5;
    while (candidate < n) {
        if (isPrime(candidate)) {
            primes.push(candidate);
        }
        candidate += delta;
        delta = 6 - delta;
    }

    function isPrime(number) {
        for (const prime of primes) {
            if (prime > Math.sqrt(number)) {
                return true;
            }
            if (number % prime === 0) {
                return false
            }
        }
        return true;
    }
    return primes.length + 2;
};

// console.log(countPrimes(13))
console.log(countPrimes(10000));