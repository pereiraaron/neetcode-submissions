class Solution {
    /**
     * @param {string} digits
     * @return {string[]}
     */
    letterCombinations(digits) {
        if (!digits.length) {
            return [];
        }

        let result = [];

        let letters = {
            2: "abc",
            3: "def",
            4: "ghi",
            5: "jkl",
            6: "mno",
            7: "pqrs",
            8: "tuv",
            9: "wxyz",
        };

        const backtrack = (path, index) => {
            //Base condition
            if (index === digits.length) {
                result.push(path.join(""));
                return;
            }

            const choices = letters[digits[index]];

            //for choice of choices
            for (let i = 0; i < choices.length; i++) {
                //Make choice
                path.push(choices[i]);

                //Backtrack (updated_params)
                backtrack(path, index + 1);

                //Undo choice
                path.pop();
            }
        };

        backtrack([], 0);

        return result;
    }
}
