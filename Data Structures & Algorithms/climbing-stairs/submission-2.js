class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        //distinct[i] = distinct[i-1]+disticnt[i-2]
        let dp = [];
        dp[1] = 1;
        dp[2] = 2;

        for (let i = 3; i <= n; i++) {
            dp[i] = dp[i - 1] + dp[i - 2];
        }

        return dp[n];
    }
}
