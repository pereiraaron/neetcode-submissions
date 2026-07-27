class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        if (s1.length > s2.length) {
            return false;
        }

        let count1 = new Array(26).fill(0);
        let count2 = new Array(26).fill(0);

        for (let i = 0; i < s1.length; i++) {
            count1[s1.charCodeAt(i) - 97]++;
            count2[s2.charCodeAt(i) - 97]++;
        }

        let left = 0;
        let right = s1.length - 1;

        while (right < s2.length) {
            if (this.matches(count1, count2)) {
                return true;
            }
            count2[s2.charCodeAt(left) - 97]--;
            left++;
            right++;
            count2[s2.charCodeAt(right) - 97]++;
        }

        return false;
    }

    matches(map1, map2) {
        for (let i = 0; i < 26; i++) {
            if (map1[i] !== map2[i]) {
                return false;
            }
        }
        return true;
    }
}
