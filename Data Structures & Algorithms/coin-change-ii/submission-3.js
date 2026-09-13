class Solution {
    /**
     * @param {number} amount
     * @param {number[]} coins
     * @return {number}
     */
    change(amount, coins) {
        const dp = new Map();

        const calculate = (start, remainingAmount) => {
            //We have found valid combination
            if (remainingAmount === 0) {
                return 1;
            }
            //We have reached end and no combo was found
            if (start >= coins.length || remainingAmount < 0) {
                return 0;
            }

            const key = `${start},${remainingAmount}`;
            if (dp.has(key)) {
                return dp.get(key);
            }

            let result = 0;

            // 1. Skip current coin + 2. Take current coin
            result =
                calculate(start + 1, remainingAmount) +
                calculate(start, remainingAmount - coins[start]);

            dp.set(key, result);
            return result;
        };

        return calculate(0, amount);
    }
}
