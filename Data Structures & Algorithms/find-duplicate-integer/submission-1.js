class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums) {
        for (const num of nums) {
            let index = Math.abs(num) - 1;
            if (nums[index] < 0) {
                return Math.abs(num);
            }
            nums[index] *= -1;
        }

        return -1;
    }
}
