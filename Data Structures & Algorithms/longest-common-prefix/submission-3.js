class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        for (let i = 0; i < strs[0].length; i++) {
            for (let s of strs) {
                if (s[i] !== strs[0][i] || i === s.length) {
                    return s.slice(0, i);
                }
            }
        }
        return strs[0];
    }
}
