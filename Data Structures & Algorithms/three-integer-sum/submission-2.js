class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums = nums.sort((a, b) => a - b);
        let result = [];

        for (let i = 0; i < nums.length - 2; i++) {
            // If the current number is > 0, three positive numbers can never sum to 0
            if (nums[i] > 0) {
                break;
            }

            // Skip duplicates for the first element
            if (i > 0 && nums[i] === nums[i - 1]) {
                continue;
            }

            // If the smallest possible sum starting from i is > 0, no valid triplets exist
            if (nums[i] + nums[i + 1] + nums[i + 2] > 0) {
                break;
            }

            let left = i + 1;
            let right = nums.length - 1;

            while (left < right) {
                const sum = nums[i] + nums[left] + nums[right];

                if (sum === 0) {
                    result.push([nums[i], nums[left], nums[right]]);
                    left++;
                    right--;

                    // Check duplicates on both sides
                    while (left < right && nums[left - 1] === nums[left]) {
                        left++;
                    }
                    while (left < right && nums[right + 1] === nums[right]) {
                        right--;
                    }
                } else if (sum < 0) {
                    left++;
                } else {
                    right--;
                }
            }
        }

        return result;
    }
}
