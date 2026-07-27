class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let left = 0;
        let right = 0;
        let map = {};
        map[s[0]] = 1;
        let maxWindow = 0;

        while (right < s.length) {
            if (this.isWindowValid(map, k)) {
                maxWindow = Math.max(maxWindow, right - left + 1);
                right++;
                map[s[right]] = (map[s[right]] ?? 0) + 1;
            } else {
                map[s[left]] = map[s[left]] - 1;
                left++;
            }
        }

        return maxWindow;
    }

    isWindowValid(map, k) {
        let maxCount = 0;
        let totalCount = 0;
        for (let char in map) {
            totalCount += map[char];
            maxCount = Math.max(maxCount, map[char]);
        }
        return totalCount - maxCount <= k;
    }
}
