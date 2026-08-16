class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        let result = [];
        let queue = [];
        let left = 0;

        for (let right = 0; right < nums.length; right++) {
            //Remove all smaller elemnts before pushing current element
            while (queue.length && nums[right] > queue[queue.length - 1]) {
                queue.pop();
            }
            queue.push(nums[right]);

            if (right >= k - 1) {
                result.push(queue[0]);

                //If left most element of current window is largest remove it
                if (nums[left] === queue[0]) {
                    queue.shift();
                }

                left++;
            }
        }

        return result;
    }
}
