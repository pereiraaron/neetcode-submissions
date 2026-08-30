class Solution {
    /**
     * @param {string} s
     * @return {string[][]}
     */
    partition(s) {
        let result = [];

        const isPalindrome = (str) => {
            let left = 0;
            let right = str.length - 1;
            while (left < right) {
                if (str[left++] !== str[right--]) {
                    return false;
                }
            }
            return true;
        };

        const backtrack = (path, remainingString) => {
            //Base conditon
            if (!remainingString.length) {
                result.push([...path]);
                return;
            }

            //for choice of choices
            for (let i = 1; i <= remainingString.length; i++) {
                const choice = remainingString.substr(0, i);

                if (!isPalindrome(choice)) {
                    continue;
                }

                //Make choice
                path.push(choice);

                //Backtrack(updated_params)
                backtrack(path, remainingString.substr(i));

                //Undo choice
                path.pop();
            }
        };

        backtrack([], s);

        return result;
    }
}
