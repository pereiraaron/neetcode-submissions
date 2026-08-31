class Solution {
    /**
     * @param {number} n
     * @return {string[][]}
     */
    solveNQueens(n) {
        let result = [];
        let board = Array.from({ length: n }, () => Array(n).fill("."));

        const backtrack = (board, row, colSet, diagSet, antiDiagSet) => {
            if (row === n) {
                result.push(board.map((row) => row.join("")));
            }

            //for choice of choices
            for (let col = 0; col < n; col++) {
                if (colSet.has(col) || diagSet.has(row - col) || antiDiagSet.has(row + col)) {
                    continue;
                }

                //Make choice
                board[row][col] = "Q";
                colSet.add(col);
                diagSet.add(row - col);
                antiDiagSet.add(row + col);

                //backtrack(updated_params)
                backtrack(board, row + 1, colSet, diagSet, antiDiagSet);

                //Undo choice
                board[row][col] = ".";
                colSet.delete(col);
                diagSet.delete(row - col);
                antiDiagSet.delete(row + col);
            }
        };

        backtrack(board, 0, new Set(), new Set(), new Set());
        return result;
    }
}
