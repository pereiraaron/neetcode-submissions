class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let stack = [];
        for (const char of s) {
            switch (char) {
                case "(":
                case "{":
                case "[":
                    stack.push(char);
                    break;
                case ")":
                    if (stack.pop() !== "(") {
                        return false;
                    }
                    break;
                case "}":
                    if (stack.pop() !== "{") {
                        return false;
                    }
                    break;
                case "]":
                    if (stack.pop() !== "[") {
                        return false;
                    }
                    break;
            }
        }
        return stack.length === 0;
    }
}
