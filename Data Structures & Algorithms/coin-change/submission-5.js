class Solution {
    /**
     * @param {number[]} coins
     * @param {number} amount
     * @return {number}
     */
    coinChange(coins, amount) {
        let dp = {};

        const fn = (remAmount) => {
            if (remAmount < 0) {
                return -1;
            }

            if (remAmount === 0) {
                return 0;
            }

            if (dp[remAmount]) {
                return dp[remAmount];
            }

            let minCoins = Infinity;
            for (let coin of coins) {
                let result = fn(remAmount - coin);

                if (result >= 0) {
                    minCoins = Math.min(minCoins, 1 + result);
                }
            }
            dp[remAmount] = minCoins === Infinity ? -1 : minCoins;
            return minCoins === Infinity ? -1 : minCoins;
        };

        return fn(amount);
    }
}
