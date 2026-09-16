class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    pivotIndex(nums) {
        let total = nums.reduce((acc, val) => acc + val);
        let leftSum = 0;

        for (let i = 0; i < nums.length; i++) {
            //Total - leftSum - current value;
            let rightSum = total - leftSum - nums[i];
            if (leftSum === rightSum) {
                return i;
            }

            //If not equal add and move forward
            leftSum += nums[i];
        }

        return -1;
    }
}
