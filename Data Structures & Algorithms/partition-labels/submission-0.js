class Solution {
    /**
     * @param {string} S
     * @return {number[]}
     */
    partitionLabels(S) {
        let firstOccurence = Array(26).fill(-1);
        let lastOccurence = Array(26).fill(-1);
        let result = [];

        //Calculate first and last occurence
        for (let i = 0; i < S.length; i++) {
            let char = S.charCodeAt(i) - 97;
            if (firstOccurence[char] === -1) {
                firstOccurence[char] = i;
            }
            lastOccurence[char] = i;
        }

        //Find partitions
        let start = 0;
        let end = 0;
        for (let i = 0; i < S.length; i++) {
            let char = S.charCodeAt(i) - 97;

            //As soon as firstOccurence[char] exceeds end, we are on a new parition
            if (firstOccurence[char] > end) {
                result.push(end - start + 1);
                start = i;
                end = i;
            }

            //Choose the furthermost char
            end = Math.max(end, lastOccurence[char]);
        }

        //Last partition
        if (end - start + 1 > 0) {
            result.push(end - start + 1);
        }

        return result;
    }
}
