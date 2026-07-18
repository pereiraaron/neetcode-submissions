class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        let countMap = {};
        for (const num of nums) {
            countMap[num] = (countMap[num] ?? 0) + 1;
            if (countMap[num] >= nums.length / 2) {
                return num;
            }
        }
    }
}
