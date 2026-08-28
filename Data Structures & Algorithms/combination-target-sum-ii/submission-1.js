class Solution {
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    combinationSum2(candidates, target) {
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
            for (let i = start; i < candidates.length; i++) {
                //Check if same elemet as well as same depth
                if (i > start && candidates[i] === candidates[i - 1]) {
                    continue;
                }

                //make choice
                path.push(candidates[i]);

                //backtrack(updated_params)
                backtrack(remainingSum - candidates[i], path, i + 1);

                //undo choice
                path.pop();
            }
        };

        candidates.sort()

        backtrack(target, [], 0);

        return result;
    }
}
