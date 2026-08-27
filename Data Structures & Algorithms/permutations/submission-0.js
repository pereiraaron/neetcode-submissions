class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums) {
        let result = [];

        const backtrack = (path) => {
            //Base condition
            if (path.length === nums.length) {
                result.push([...path]);
            }

            //for choice of choices
            for (let i = 0; i < nums.length; i++) {
                if (!path.includes(nums[i])) {
                    //make choice
                    path.push(nums[i]);

                    //backtrack (updated_params)
                    backtrack(path);

                    //undo_choice(Backtracking Step)
                    path.pop();
                }
            }
        };

        backtrack([]);

        return result;
    }
}
