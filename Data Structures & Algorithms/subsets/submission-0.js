class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        let result = [];

        const backtrack = (path, start) => {
            //base case (save every path so no condition needed)
            result.push([...path]);

            // for choice in choices:
            for (let i = start; i < nums.length; i++) {
                //make_choice
                path.push(nums[i]);

                // backtrack(updated_params)
                backtrack(path, i + 1);

                //undo_choice(Backtracking Step)
                path.pop();
            }
        };

        backtrack([], 0);
        return result;
    }
}
