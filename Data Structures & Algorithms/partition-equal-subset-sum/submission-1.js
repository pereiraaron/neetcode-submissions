class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canPartition(nums) {
        let totalSum = nums.reduce((acc, val) => acc + val, 0);

        //If odd sum we can never split in two equal parts
        if (totalSum % 2 !== 0) {
            return false;
        }

        totalSum = totalSum / 2;

        let dp = Array.from({ length: totalSum + 1 }, () => Array(nums.length).fill(undefined));

        //Each subset will have elements that sum up to totalSum/2
        //If we are able to find one subset with totalSum/2, we can assume we can divide the rest since it's only even sum.
        const fn = (remainingSum, start) => {
            if (remainingSum === 0) {
                return true;
            }

            if (remainingSum < 0) {
                return false;
            }

            if (dp[remainingSum][start] != undefined) {
                return dp[remainingSum][start];
            }

            for (let i = start; i < nums.length; i++) {
                //Call function by subtracting current element, if true return immediately
                if (fn(remainingSum - nums[i], i + 1)) {
                    dp[remainingSum][start] = true;
                    return true;
                }
            }
            dp[remainingSum][start] = false;
            return false;
        };

        return fn(totalSum, 0);
    }
}
