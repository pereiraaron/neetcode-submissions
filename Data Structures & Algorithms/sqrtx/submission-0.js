class Solution {
    /**
     * @param {number} x
     * @return {number}
     */
    mySqrt(x) {
        if (x < 2) {
            return x;
        }

        let left = 2;
        let right = Math.floor(x / 2);

        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            const square = mid * mid;

            if (x === square) {
                return mid;
            } else if (x > square) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return right;
    }
}
