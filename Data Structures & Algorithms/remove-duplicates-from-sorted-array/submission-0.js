class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(nums) {
        let uniqueElements = Array.from(new Set(nums));

        for (let i = 0; i < uniqueElements.length; i++) {
            nums[i] = uniqueElements[i];
        }

        return uniqueElements.length;
    }
}
