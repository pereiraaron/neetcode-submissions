class Solution {
    /**
     * @param {number[]} matchsticks
     * @return {boolean}
     */
    makesquare(matchsticks) {
        const totalLength = matchsticks.reduce((acc, val) => acc + val, 0);

        //If not divisble we can't divide
        if (totalLength % 4 !== 0) {
            return false;
        }

        const length = totalLength / 4;

        //Max side length has to be less than or equal length for it to be divided
        const maxSide = Math.max(...matchsticks);
        if (maxSide > length) {
            return false;
        }

        const sides = Array(4).fill(0);
        matchsticks.sort((a, b) => b - a);

        const backtrack = (currentIndex) => {
            //Base case
            //If we reach at end, return true
            if (currentIndex === matchsticks.length) {
                return true;
            }

            //for choice of choices
            for (let i = 0; i < 4; i++) {
                //Skip if the matchstick can't be placed on ith side
                if (sides[i] + matchsticks[currentIndex] > length) {
                    continue;
                }

                //  Skip checking identical empty or equal sides
                if (i > 0 && sides[i] === sides[i - 1]) {
                    continue;
                }

                //Make choice
                sides[i] += matchsticks[currentIndex];

                //Backtrack (updated_params)
                //Since we don't want to check for all possible values, if we find correct answer just return
                if (backtrack(currentIndex + 1)) {
                    return true;
                }

                //Undo choice
                sides[i] -= matchsticks[currentIndex];
            }

            return false;
        };

        return backtrack(0);
    }
}
