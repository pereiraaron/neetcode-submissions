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

        let pq = new MinPriorityQueue((val) => val.freq);

        for (let key in freqMap) {
            pq.enqueue({ val: key, freq: freqMap[key] });

            if (pq.size() > k) {
                pq.dequeue();
            }
        }

        return pq.toArray().map((x) => x.val);
    }
}
