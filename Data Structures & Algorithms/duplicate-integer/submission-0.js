class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let map = {};
        for (const num of nums) {
            if (map[num]) {
                return true;
            }
            map[num] = true;
        }
        return false;
    }
}
