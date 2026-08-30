class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permuteUnique(nums) {
        let result = [];

        nums.sort((a, b) => a - b);

        const backtrack = (path, choices) => {
            //Base condition
            if (path.length === nums.length) {
                result.push([...path]);
            }

            //for choice of choices
            for (let i = 0; i < choices.length; i++) {
                if (i > 0 && choices[i - 1] === choices[i]) {
                    continue;
                }

                //Make choice
                path.push(choices[i]);

                //backtrack(updated_params)
                //Take everything except current eleent
                backtrack(path, [...choices.slice(0, i), ...choices.slice(i + 1)]);

                //undo choice
                path.pop();
            }
        };

        backtrack([], nums);

        return result;
    }
}
