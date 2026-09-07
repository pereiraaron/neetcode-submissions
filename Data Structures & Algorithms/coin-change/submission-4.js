class Solution {
    /**
     * @param {number[]} coins
     * @param {number} amount
     * @return {number}
     */
    coinChange(coins, amount) {
        let n = coins.length;
        let dp = new Map();

        const fn = (remAmount) => {
            if (remAmount < 0) {
                return -1;
            }

            if (remAmount === 0) {
                return 0;
            }

            if (dp.has(remAmount)) {
                return dp.get(remAmount);
            }

            let minCoins = Infinity;

            for (let i = 0; i < n; i++) {
                let result = fn(remAmount - coins[i]);
                if (result >= 0) {
                    minCoins = Math.min(minCoins, 1 + result);
                }
            }
            dp.set(remAmount, minCoins === Infinity ? -1 : minCoins);
            return dp.get(remAmount);
        };

        return fn(amount);
    }
}
