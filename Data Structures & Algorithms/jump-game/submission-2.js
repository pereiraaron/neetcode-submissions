class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canJump(nums) {
        const end = nums.length - 1;

        let dp = new Array(nums.length).fill(-1);

        const fn = (start) => {
            if (start === end) {
                return true;
            }

            if (dp[start] !== -1) {
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
