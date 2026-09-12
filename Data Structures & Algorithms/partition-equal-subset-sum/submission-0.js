class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canPartition(nums) {
        const totalSum = nums.reduce((acc, val) => acc + val, 0);

        if (totalSum % 2 !== 0) {
            return false;
        }

        //Each subset will have elements that sum up to totalSum/2
        //If we are able to find one subset with totalSum/2, we can assume we can divide the rest since it's only even sum.

        const fn = (remainingSum, start) => {
            if (remainingSum === 0) {
                return true;
            }
            if (remainingSum < 0) {
                return false;
            }

            for (let i = start; i < nums.length; i++) {
                //Call function by sub current element, if true return immediately
                if (fn(remainingSum - nums[i], i + 1)) {
                    return true;
                }
            }

            return false;
        };

        return fn(totalSum / 2, 0);
    }
}
