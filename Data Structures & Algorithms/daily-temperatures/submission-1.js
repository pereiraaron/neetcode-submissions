class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const n = temperatures.length;
        let result = Array(n).fill(0);

        let stack = [];
        stack.push(n - 1);

        for (let i = n - 2; i >= 0; i--) {
            while (stack.length) {
                const top = stack[stack.length - 1];
                if (temperatures[i] >= temperatures[top]) {
                    stack.pop();
                } else {
                    result[i] = top - i;
                    break;
                }
            }
            // if (stack.length === 0) {
            //   result[i] = 0;
            // }
            stack.push(i);
        }

        return result;
    }
}
