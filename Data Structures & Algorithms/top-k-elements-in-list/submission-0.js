class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let freqMap = {};

        for (const num of nums) {
            freqMap[num] = (freqMap[num] ?? 0) + 1;
        }

        const sorted = Object.keys(freqMap).sort((a, b) => freqMap[b] - freqMap[a]);

        return sorted.slice(0, k);
    }
}
