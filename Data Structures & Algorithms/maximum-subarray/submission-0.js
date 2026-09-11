class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums) {
        let maxSum = nums[0];
        let currentSum = nums[0];

        for (let i = 1; i < nums.length; i++) {
            //choose max between prev + current and current. If current is larger we can ignore prev sum
            currentSum = Math.max(currentSum + nums[i], nums[i]);
            maxSum = Math.max(currentSum, maxSum);
        }

        return maxSum;
    }
}
