class Solution {
    /**
     * @param {string} S
     * @return {number[]}
     */
    partitionLabels(S) {
        const lastOccurrence = {};
        //Calculate first and last occurence
        for (let i = 0; i < S.length; i++) {
            lastOccurrence[S[i]] = i;
        }

        const result = [];
        let size = 0;
        let end = 0;
        for (let i = 0; i < S.length; i++) {
            //Increment Size
            size++;

            //Always choose furthermost char
            end = Math.max(end, lastOccurrence[S[i]]);

            //We have reached end of partition, push and start new parition
            if (i === end) {
                result.push(size);
                size = 0;
            }
        }

        return result;
    }
}
