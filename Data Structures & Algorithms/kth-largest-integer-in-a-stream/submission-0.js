class KthLargest {
    /**
     * @param {number} k
     * @param {number[]} nums
     */
    constructor(k, nums) {
        this.pq = new MinPriorityQueue();
        this.k = k;

        for (const num of nums) {
            this.add(num);
        }
    }

    /**
     * @param {number} val
     * @return {number}
     */
    add(val) {
        this.pq.enqueue(val);

        if (this.pq.size() > this.k) {
            this.pq.dequeue();
        }

        return this.pq.front();
    }
}
