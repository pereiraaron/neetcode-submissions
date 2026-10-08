class Solution {
    /**
     * @param {number[]} people
     * @param {number} limit
     * @return {number}
     */
    numRescueBoats(people, limit) {
        people.sort((a, b) => a - b);
        let left = 0;
        let count = 0;
        let right = people.length - 1;

        while (left <= right) {
            if (people[left] + people[right] <= limit) {
                left++;
                right--;
                count++;
            } else if (people[right] <= limit) {
                right--;
                count++;
            }
        }

        return count;
    }
}
