class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let position = 0;
        let longest = 0;
        let map = new Map();

        for (let i = 0; i < s.length; i++) {
            if (map.has(s[i])) {
                position = Math.max(map.get(s[i]) + 1, position);
            }
            map.set(s[i], i);
            longest = Math.max(i - position + 1, longest);
        }

        return longest
    }
}
