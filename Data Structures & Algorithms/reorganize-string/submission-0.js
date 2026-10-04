class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    reorganizeString(s) {
        let freqMap = {};
        let maxFreq = 0;

        for (const char of s) {
            freqMap[char] = (freqMap[char] ?? 0) + 1;
            maxFreq = Math.max(maxFreq, freqMap[char]);
        }

        if (maxFreq > Math.ceil(s.length / 2)) {
            return "";
        }

        let chars = Object.keys(freqMap).sort((a, b) => freqMap[b] - freqMap[a]);
        let result = new Array(s.length);

        let i = 0;
        for (const char of chars) {
            let count = freqMap[char];
            while (count > 0) {
                if (i >= s.length) {
                    //Move to odd
                    i = 1;
                }
                result[i] = char;
                count--;
                //Skip odd
                i = i + 2;
            }
        }

        return result.join("");
    }
}
