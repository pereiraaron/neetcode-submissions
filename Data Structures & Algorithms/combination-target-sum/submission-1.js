class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        let result = [];

        const backtrack = (remainingSum, path, start) => {
            //Base case

            if (remainingSum < 0) {
                return;
            }

            if (remainingSum === 0) {
                result.push([...path]);
                return;
            }

            //for choice of choices
            for (let i = start; i < nums.length; i++) {
                //make choice
                path.push(nums[i]);

                //backtrack(updated_params)
                backtrack(remainingSum - nums[i], path, i);

                //undo choice
                path.pop();
            }
        };

        backtrack(target, [], 0);

        return result;
    }
}
