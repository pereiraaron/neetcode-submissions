class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    exist(board, word) {
        let result = false;
        let m = board.length;
        let n = board[0].length;

        const backtrack = (x, y, nextCharIndex) => {
            //Base condition
            if (nextCharIndex === word.length) {
                result = true;
                return;
            }

            //Make choice
            //Mark visited
            let temp = board[x][y];
            board[x][y] = "#";

            //Backtrack(updated_params)
            //Check top, bottom,left,tight
            if ((y < n - 1 && board[x][y + 1]) === word[nextCharIndex]) {
                backtrack(x, y + 1, nextCharIndex + 1);
            }

            if ((y > 0 && board[x][y - 1]) === word[nextCharIndex]) {
                backtrack(x, y - 1, nextCharIndex + 1);
            }

            if ((x > 0 && board[x - 1][y]) === word[nextCharIndex]) {
                backtrack(x - 1, y, nextCharIndex + 1);
            }

            if ((x < m - 1 && board[x + 1][y]) === word[nextCharIndex]) {
                backtrack(x + 1, y, nextCharIndex + 1);
            }

            //undo choice
            board[x][y] = temp;
        };

        for (let i = 0; i < m; i++) {
            for (let j = 0; j < n; j++) {
                if (board[i][j] === word[0]) {
                    backtrack(i, j, 1);
                }
            }
        }

        return result;
    }
}
