class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxProduct(nums) {
        let maxProd = nums[0];
        let minProd = nums[0];
        let max = nums[0];

        for (let i = 1; i < nums.length; i++) {
            const currentNum = nums[i];
            const currentMaxProd = maxProd * currentNum;
            const currentMinProd = minProd * currentNum;

            maxProd = Math.max(currentMaxProd, currentMinProd, currentNum);
            minProd = Math.min(currentMaxProd, currentMinProd, currentNum);

            max = Math.max(max, maxProd);
        }

        return max;
    }
}
