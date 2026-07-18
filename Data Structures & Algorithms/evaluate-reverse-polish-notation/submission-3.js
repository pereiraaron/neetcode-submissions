class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        let stack = [];

        for (const token of tokens) {
            if (token === "+" || token === "-" || token === "/" || token === "*") {
                let result = 0;
                let val2 = stack.pop();
                let val1 = stack.pop();

                switch (token) {
                    case "+":
                        result = val1 + val2;
                        break;
                    case "-":
                        result = val1 - val2;
                        break;
                    case "*":
                        result = val1 * val2;
                        break;
                    case "/":
                        result = Math.trunc(val1 / val2);
                        break;
                }
                stack.push(Number(result));
            } else {
                stack.push(Number(token));
            }
        }
        return stack[0];
    }
}
