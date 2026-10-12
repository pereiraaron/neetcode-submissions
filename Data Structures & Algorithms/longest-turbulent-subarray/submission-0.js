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
            } else {
                //equal sign
                if (arr[right - 1] === arr[right]) {
                    right++;
                }
                left = right - 1;
                prev = "";
            }
        }

        return result;
    }
}
