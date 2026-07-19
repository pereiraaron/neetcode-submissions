class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let pivot = 0;
        for (let i = 0; i < nums.length - 1; i++) {
            if (!(nums[i] < nums[i + 1])) {
                pivot = i + 1;
                break;
            }
        }

        const result = this.binarySearch(nums, target, 0, pivot - 1);

        if (result !== -1) {
            return result;
        }

        return this.binarySearch(nums, target, pivot, nums.length - 1);
    }

    binarySearch(nums, target, left, right) {
        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            if (nums[mid] === target) {
                return mid;
            } else if (nums[mid] > target) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
        return -1;
    }
}
