class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxProduct(nums) {
        let maxProd = [nums[0]];
        let minProd = [nums[0]];

        for (let i = 1; i < nums.length; i++) {
            const currentMaxProd = maxProd[i - 1] * nums[i];
            const currentMinProd = minProd[i - 1] * nums[i];

            maxProd[i] = Math.max(currentMaxProd, currentMinProd, nums[i]);
            minProd[i] = Math.min(currentMaxProd, currentMinProd, nums[i]);
        }

        //Do this or maintain a variable
        const maxProduct = Math.max(...maxProd);

        return maxProduct;
    }
}
