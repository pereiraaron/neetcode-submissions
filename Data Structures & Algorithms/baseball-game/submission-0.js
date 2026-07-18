class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations) {
        let stack = [];

        for (const op of operations) {
            if (op === "+") {
                const val1 = stack.pop();
                const val2 = stack.pop();
                stack.push(val2);
                stack.push(val1);
                stack.push(val1 + val2);
            } else if (op === "C") {
                stack.pop();
            } else if (op === "D") {
                const top = stack[stack.length - 1];
                stack.push(2 * top);
            } else {
                stack.push(Number(op));
            }
        }
        return stack.reduce((acc, val) => acc + val, 0);
    }
}
