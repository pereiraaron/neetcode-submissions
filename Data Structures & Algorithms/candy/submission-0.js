class Solution {
    /**
     * @param {number[]} ratings
     * @return {number}
     */
    candy(ratings) {
        let n = ratings.length;
        let result = n;
        let i = 1;
        while (i < n) {
            //If its a plateau (neighbour is same) skip
            if (ratings[i] === ratings[i - 1]) {
                i++;
                continue;
            }

            //If ratings are in increasying order

            let inc = 0;
            while (ratings[i] > ratings[i - 1]) {
                inc++;
                result += inc;
                i++;
            }

            //If ratings are in decreasing order
            let dec = 0;
            while (ratings[i] < ratings[i - 1]) {
                dec++;
                result += dec;
                i++;
            }

            //Always take min for peaks
            result -= Math.min(inc, dec);
        }

        return result;
    }
}
