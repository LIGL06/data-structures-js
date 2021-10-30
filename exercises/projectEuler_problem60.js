const MAX = 20000;

function isPrime(number) {
    let flag = true;
    if (number > 1) {
        for (let i = 2; i < number; i++) {
            if (number % i == 0) {
                flag = false;
                break;
            }
        }
    } else {
        flag = false;
    }
    return flag;
};

const isConcatPrime = (first = 7, second = 109) => isPrime(Number(`${first}${second}`));

function generatePrimes() {
    const primes = [];
    for (let i = 1; i <= MAX; i++) {
        isPrime(i) ? primes.push(i) : null;
    }
    return primes;
};

const primes = generatePrimes();

const validateTrue = (value) => value === true;

const findSetSum = (prefix, targetSize, sumLimit) => {
    if (prefix.length === targetSize) {
        let sum = 0;
        prefix.map(primeIndex => sum += primes[primeIndex]);
        return sum;
    } else {
        let iStart;
        if (!prefix.length) {
            iStart = 0;
        } else {
            iStart = prefix[prefix.length - 1] + 1;
        }
        let sumIJ = [],
            sumJI = [];
        for (let i = iStart; i < primes.length; i++) {
            if (primes[i] > sumLimit) break;
            prefix.forEach(j => {
                if (isConcatPrime(i, j)) sumIJ.push(true);
                if (isConcatPrime(j, i)) sumJI.push(true);
            });
            if (sumIJ.every(validateTrue) && sumJI.every(validateTrue)) {
                prefix.push(i);
                const result = findSetSum(prefix, targetSize, sumLimit - primes[i]);
                prefix.pop();
                if (result) return result;
            }

        }
        return null;
    }

};

function getSum() {
    return findSetSum([1, 3, 28, 121], 4, MAX - 1);
}

console.log(getSum());