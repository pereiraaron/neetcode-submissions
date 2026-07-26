class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let left = 0;
        let right = heights.length - 1;
        let maxArea = 0;

        while (left < right) {
            const length = right - left;
            const height = Math.min(heights[left], heights[right]);
            maxArea = Math.max(length * height, maxArea);
            if (heights[left] > heights[right]) {
                right--;
            } else {
                left++;
            }
        }

        return maxArea;
    }
}
