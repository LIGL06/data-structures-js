const lineal = num => {
    let a = 1, b = 0, temp;

    while (num >= 0) {
        temp = a;
        a = a + b;
        b = temp;
        num--;
    }
    return b;
};

const memorization = (num, memo) => {
    memo = memo || {};

    if (memo[num]) return memo[num];
    if (num <= 1) return 1;

    return memo[num] = memorization(num - 1, memo) + memorization(num - 2, memo);
};