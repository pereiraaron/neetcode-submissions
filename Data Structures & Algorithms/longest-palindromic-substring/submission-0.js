class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    longestPalindrome(s) {
        let n = s.length;
        if (n < 2) return s;

        let start = 0;
        let maxLen = 1;
        const dp = Array.from({ length: n }, () => Array(n).fill(false));

        for (let i = n - 1; i >= 0; i--) {
            for (let j = i; j < n; j++) {
                if (s[i] === s[j]) {
                    if (j - i <= 2 || dp[i + 1][j - 1]) {
                        dp[i][j] = true;

                        // Update max length and start index
                        let currentLen = j - i + 1;
                        if (currentLen > maxLen) {
                            maxLen = currentLen;
                            start = i;
                        }
                    }
                }
            }
        }

        return s.slice(start, start + maxLen);
    }
}
