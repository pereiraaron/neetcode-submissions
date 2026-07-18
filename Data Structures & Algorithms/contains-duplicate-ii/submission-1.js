class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {boolean}
     */
    containsNearbyDuplicate(nums, k) {
        for (let i = 0; i < nums.length; i++) {
            for (let j = i + 1; j < Math.min(nums.length, i + k + 1); j++) {
                if (nums[i] === nums[j]) {
                    return true;
                }
            }
        }
        return false;
    }
}
