class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones) {
        const pq = new MaxPriorityQueue();

        for (const stone of stones) {
            pq.enqueue(stone);
        }

        while (pq.size() > 1) {
            const max = pq.dequeue();
            const secondMax = pq.dequeue();
            const current = max - secondMax;

            if (current > 0) {
                pq.enqueue(current);
            }
        }

        return pq.dequeue() ?? 0;
    }
}
