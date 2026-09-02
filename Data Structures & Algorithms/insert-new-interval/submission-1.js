class Solution {
    /**
     * @param {number[][]} intervals
     * @param {number[]} newInterval
     * @return {number[][]}
     */
    insert(intervals, newInterval) {
        let result = [];

        let n = intervals.length;

        let i = 0;

        //Left non-overlapping intervals
        //compare end of current with start of new
        while (i < n && intervals[i][1] < newInterval[0]) {
            result.push(intervals[i]);
            i++;
        }

        //Overlapping intervals
        //compare start of current with end of new
        while (i < n && intervals[i][0] <= newInterval[1]) {
            newInterval[0] = Math.min(newInterval[0], intervals[i][0]);
            newInterval[1] = Math.max(newInterval[1], intervals[i][1]);
            i++;
        }

        result.push(newInterval);

        //Right non-overlapping intervals
        while (i < n) {
            result.push(intervals[i]);
            i++;
        }

        return result;
    }
}
