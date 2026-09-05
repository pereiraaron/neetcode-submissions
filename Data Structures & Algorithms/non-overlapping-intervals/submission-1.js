class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number}
     */
    eraseOverlapIntervals(intervals) {
        intervals.sort((a, b) => a[1] - b[1]);
        let result = 0;
        let previousEnd = intervals[0][1];

        for (let i = 1; i < intervals.length; i++) {
            //If previous end is greater than current start, it's overlapping
            if (previousEnd > intervals[i][0]) {
                result++;
            }else{
              previousEnd = intervals[i][1] 
            }
        }

        return result;
    }
}
