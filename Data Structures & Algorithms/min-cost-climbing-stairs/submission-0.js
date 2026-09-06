class Solution {
    /**
     * @param {number[]} cost
     * @return {number}
     */
    minCostClimbingStairs(cost) {
        let n = cost.length;
        let dp = [];
        dp[0] = 0;
        dp[1] = 0;

        for (let i = 2; i <= n; i++) {
            const minCost1 = dp[i - 1] + cost[i - 1];
            const minCost2 = dp[i - 2] + cost[i - 2];
            dp[i] = Math.min(minCost1, minCost2);
        }

        return dp[n];
    }
}
