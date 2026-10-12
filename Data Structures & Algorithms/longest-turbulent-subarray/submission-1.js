class Solution {
    /**
     * @param {number[]} arr
     * @return {number}
     */
    maxTurbulenceSize(arr) {
        let left = 0;
        let right = 1;
        let result = 1;
        let prev = "";

        while (right < arr.length) {
            if (arr[right - 1] > arr[right] && prev !== ">") {
                result = Math.max(result, right - left + 1);
                right++;
                prev = ">";
            } else if (arr[right - 1] < arr[right] && prev !== "<") {
                result = Math.max(result, right - left + 1);
                right++;
                prev = "<";
            } else if (arr[right - 1] === arr[right]) {
                // Equal elements: reset window to start at `right`
                left = right;
                right++;
                prev = "";
            } else {
                // Repeated sign: current pair becomes new start (left = right - 1)
                left = right - 1;
                prev = "";
            }
        }

        return result;
    }
}
