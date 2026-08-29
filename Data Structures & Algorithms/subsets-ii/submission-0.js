class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsetsWithDup(nums) {
        let result = [];

        const backtrack = (path, start) => {
            //base case (save every path so no condition needed)
            result.push([...path]);

            // for choice in choices:
            for (let i = start; i < nums.length; i++) {
                //Check if same elemet as well as same depth
                if (i > start && nums[i] === nums[i - 1]) {
                    continue;
                }

                //make_choice
                path.push(nums[i]);

                // backtrack(updated_params)
                backtrack(path, i + 1);

                //undo_choice(Backtracking Step)
                path.pop();
            }
        };

        nums.sort();
        backtrack([], 0);
        return result;
    }
}
