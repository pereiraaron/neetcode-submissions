class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canJump(nums) {
        const end = nums.length - 1;

        let dp = {};

        const fn = (start) => {
            if (start === end) {
                return true;
            }

            if (dp[start] !== undefined) {
                return dp[start];
            }

            let result = false;
            for (let i = 1; i <= nums[start]; i++) {
                result = result || fn(start + i);
            }
            dp[start] = result;
            return result;
        };

        return fn(0);
    }
}
