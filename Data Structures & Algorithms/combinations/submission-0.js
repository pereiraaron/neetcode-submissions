class Solution {
    /**
     * @param {number} n
     * @param {number} k
     * @return {number[][]}
     */
    combine(n, k) {
        let result = [];

        const backtrack = (path, start) => {
            //base case (save every path so no condition needed)
            if (path.length === k) {
                result.push([...path]);
            }

            // for choice in choices:
            for (let i = start; i <= n; i++) {
                //make_choice
                path.push(i);

                // backtrack(updated_params)
                backtrack(path, i + 1);

                //undo_choice(Backtracking Step)
                path.pop();
            }
        };

        backtrack([], 1);

        return result;
    }
}
