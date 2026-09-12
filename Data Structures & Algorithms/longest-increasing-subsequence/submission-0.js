class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    lengthOfLIS(nums) {
        let n = nums.length;
        let dp = new Array(n).fill(1);
        dp[0] = 1;

        for (let i = 1; i < n; i++) {
            for (let j = 0; j < i; j++) {
                if (nums[j] < nums[i]) {
                    dp[i] = Math.max(dp[i], 1 + dp[j]);
                }
            }
        }
        return Math.max(...dp);
    }
}
