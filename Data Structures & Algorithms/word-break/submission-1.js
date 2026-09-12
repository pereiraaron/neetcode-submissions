class Solution {
    /**
     * @param {string} s
     * @param {string[]} wordDict
     * @return {boolean}
     */
    wordBreak(s, wordDict) {
        let dp = new Map();

        const calculate = (remainingString) => {
            let result = false;
            if (remainingString.length === 0) {
                return true;
            }

            if (dp.has(remainingString)) {
                return dp.get(remainingString);
            }

            for (let i = 0; i < remainingString.length; i++) {
                const substr = remainingString.substring(0, i + 1);
                if (wordDict.includes(substr)) {
                    const canRemaingStringBeBroken = calculate(remainingString.substring(i + 1));
                    if (canRemaingStringBeBroken) {
                        result = true;
                    }
                }
            }
            dp.set(remainingString, result);
            return result;
        };

        return calculate(s);
    }
}
