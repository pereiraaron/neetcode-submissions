class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let map = {};
        for (let str of strs) {
            const count = new Array(26).fill(0);
            for (const char of str) {
                const charIndex = char.charCodeAt(0) - "a".charCodeAt(0);
                count[charIndex] += 1;
            }
            let key = "";
            for (let i = 0; i < 26; i++) {
                key += String.fromCharCode(i + 97) + count[i];
            }
            if (!map[key]) {
                map[key] = [];
            }
            map[key].push(str);
        }
        return Object.values(map);
    }
}
