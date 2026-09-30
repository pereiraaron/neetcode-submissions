class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canJump(nums) {
        let farthestJump = 0;

        for (let i = 0; i < nums.length; i++) {
            if (i > farthestJump) {
                return false;
            }
            farthestJump = Math.max(farthestJump, i + nums[i]);
        }

        return true;
    }
}
