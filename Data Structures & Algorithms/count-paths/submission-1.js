class Solution {
    /**
     * @param {number} m
     * @param {number} n
     * @return {number}
     */
    uniquePaths(m, n) {
        let dp = Array.from({ length: m }, () => Array(n).fill(-1));

        const fn = (x, y) => {
            //Base case (starting position's path will always be 1)
            if (x === 0 && y === 0) {
                return 1;
            }

            //For corner cells (only one path exists)
            if (x < 0 || y < 0) {
                return 0;
            }

            if (dp[x][y] !== -1) {
                return dp[x][y];
            }

            // store and return right + down
            const result = fn(x - 1, y) + fn(x, y - 1);
            dp[x][y] = result;
            return result;
        };

        //Unique paths to reach the last cell
        return fn(m - 1, n - 1);
    }
}
