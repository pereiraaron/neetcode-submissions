class Solution {
    /**
     * @param {number} target
     * @param {number[]} nums
     * @return {number}
     */
    minSubArrayLen(target, nums) {
        let left = 0;
        let total = 0;
        let minLength = Infinity;

        for (let right = 0; right < nums.length; right++) {
            total += nums[right];
            while (total >= target) {
                const size = right - left + 1;
                minLength = Math.min(minLength, size);
                total -= nums[left];
                left++;
            }
        }

        return minLength === Infinity ? 0 : minLength;
    }
}
