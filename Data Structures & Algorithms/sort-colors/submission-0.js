class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    sortColors(nums) {
        const count = new Array(3).fill(0);

        for (const num of nums) {
            count[num]++;
        }

        let index = 0;
        for (let i = 0; i < 3; i++) {
            while (count[i] > 0) {
                nums[index] = i;
                count[i]--;
                index++;
            }
        }

        return count;
    }
}
