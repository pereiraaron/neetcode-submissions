class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(nums) {
        let unique = 0;

        for (let pointer = 1; pointer < nums.length; pointer++) {
            if (nums[unique] !== nums[pointer]) {
                unique++;
                nums[unique] = nums[pointer];
            }
        }

        return unique + 1;
    }
}
