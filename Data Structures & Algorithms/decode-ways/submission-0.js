class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    numDecodings(s) {
        let dp = new Map();

        function solve(remainingString) {
            if (remainingString === "") {
                return 1;
            }

            if (remainingString === "0") {
                return 0;
            }

            if (dp.has(remainingString)) {
                return dp.get(remainingString);
            }

            const n = remainingString.length;
            const lastDigit = remainingString.substr(n - 1);
            const lastTwoDigits = remainingString.substr(n - 2);

            let result = 0;
            //Total ways to decode
            //decode(string) =   decode(last char of string) + decode(last two chars of string)
            if (lastDigit != 0) {
                result += solve(remainingString.substr(0, n - 1));
            }

            if (lastTwoDigits >= 10 && lastTwoDigits <= 26) {
                result += solve(remainingString.substr(0, n - 2));
            }

            dp.set(remainingString, result);

            return result;
        }

        return solve(s);
    }
}
