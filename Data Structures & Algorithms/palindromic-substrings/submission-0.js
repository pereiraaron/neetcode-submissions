class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    countSubstrings(s) {
        let result = 0;
        let n = s.length;

        const dp = Array.from({ length: n }, () => Array(n).fill(false));

        // Iterate backwards for start index `i` so inner subproblems are solved first
        for (let i = n - 1; i >= 0; i--) {
            for (let j = i; j < n; j++) {
                //Check if end chars match
                if (s[i] === s[j]) {
                    //Can combine below two statements
                    // if (j - i <= 2 || dp[i + 1][j - 1]) {
                    //     dp[i][j] = true;
                    //     totalCount++;
                    // }

                    // If substring length <= 3 (e.g., "a", "aa", "aba"),
                    //its a palindrome
                    if (j - i <= 2) {
                        dp[i][j] = true;
                        result++;
                        continue;
                    }

                    //if inner substring is a palindrome, outer is palindrome as well
                    if (dp[i + 1][j - 1]) {
                        dp[i][j] = true;
                        result++;
                    }
                }
            }
        }

        return result;
    }
}
