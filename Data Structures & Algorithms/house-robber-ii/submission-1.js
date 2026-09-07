class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        if (nums.length === 1) {
            return nums[0];
        }

        const robHelper = (arr) => {
            let dp = [];
            dp[0] = arr[0];
            dp[1] = Math.max(arr[0], arr[1]);

            for (let i = 2; i < nums.length; i++) {
                dp[i] = Math.max(dp[i - 1], dp[i - 2] + arr[i]);
            }

            return dp[arr.length - 1];
        };

        //Since the houses are cyclic
        //If I consider first house, run till n-2;so that it's not cyclic
        //If I consider second house, run till n-1;
        return Math.max(
            robHelper(nums.slice(0, nums.length - 1)),
            robHelper(nums.slice(1, nums.length)),
        );
    }
}
