class Solution {
    /**
     * @param {number} n - a positive integer
     * @return {number}
     */
    hammingWeight(n) {
        let result = 0;

        while (n) {
            result += n % 2;
            n = n >> 1;
        }

        return result;
    }
}
