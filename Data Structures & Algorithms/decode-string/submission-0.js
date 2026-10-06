class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    decodeString(s) {
        let stack = [];

        for (const char of s) {
            if (char !== "]") {
                stack.push(char);
            } else {
                let substr = "";

                //Pop all the chars before opening bracket and store it
                while (stack[stack.length - 1] !== "[") {
                    substr = stack.pop() + substr;
                }

                //Pop the actual opening bracket
                stack.pop();

                //Pop again for getting the number
                let num = "";
                while (stack.length && !isNaN(stack[stack.length - 1])) {
                    num = stack.pop() + num;
                }

                //Multiply and append to stack again
                stack.push(substr.repeat(Number(num)));
            }
        }

        return stack.join("");
    }
}
