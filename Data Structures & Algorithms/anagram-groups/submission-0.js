class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let map = {};

        for (const str of strs) {
            let word = str.split("").sort().join("");
            if (!map[word]) {
                map[word] = [];
            }
            map[word].push(str);
        }

        return Object.values(map);
    }
}
