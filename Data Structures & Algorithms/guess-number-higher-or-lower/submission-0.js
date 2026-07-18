/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * function guess(num) {}
 */

class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    guessNumber(n) {
        let start = 1;
        let end = n;
        while (true) {
            const guessedNumber = Math.floor((start + end) / 2);
            const guessResult = guess(guessedNumber);
            if (guessResult > 0) {
                start = guessedNumber + 1;
            } else if (guessResult < 0) {
                end = guessedNumber - 1;
            } else {
                return guessedNumber;
            }
        }
    }
}
