class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        if (nums.length === 1) {
            return nums[0];
        }
        
        const robHelper = (start, end) => {
            let rob1 = 0;
            let rob2 = 0;

            for (let i = start; i < end; i++) {
                const temp = Math.max(nums[i] + rob1, rob2);
                rob1 = rob2;
                rob2 = temp;
            }

            return rob2;
        };

        return Math.max(robHelper(0, nums.length - 1), robHelper(1, nums.length));
    }
}
