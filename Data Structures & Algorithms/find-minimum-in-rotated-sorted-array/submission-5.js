class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        //There will only be one inflection point in a rotated array, find and return it
        let left = 0;
        let right = nums.length - 1;

        while (left <= right) {
            //If search array is already sorted return first element
            if (nums[left] <= nums[right]) {
                return nums[left];
            }

            const mid = Math.floor((left + right) / 2);
            if (nums[mid - 1] > nums[mid]) {
                return nums[mid];
            }

            if (nums[left] > nums[mid]) {
                //left not sorted
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
    }
}
