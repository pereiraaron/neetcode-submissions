class Solution {
    /**
     * @param {number[]} hand
     * @param {number} groupSize
     * @return {boolean}
     */
    isNStraightHand(hand, groupSize) {
        if (hand.length % groupSize !== 0) return false;

        const freqMap = {};
        for (const card of hand) {
            freqMap[card] = (freqMap[card] || 0) + 1;
        }

        const sortedKeys = Object.keys(freqMap)
            .map(Number)
            .sort((a, b) => a - b);

        for (const card of sortedKeys) {
            const count = freqMap[card];
            if (count > 0) {
                for (let i = card; i < card + groupSize; i++) {
                    if ((freqMap[i] || 0) < count) {
                        return false;
                    }
                    freqMap[i] -= count;
                }
            }
        }

        return true;
    }
}
