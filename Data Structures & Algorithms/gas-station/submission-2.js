class Solution {
    /**
     * @param {number[]} gas
     * @param {number[]} cost
     * @return {number}
     */
    canCompleteCircuit(gas, cost) {
        const totalGas = gas.reduce((acc, val) => acc + val);
        const totalCost = cost.reduce((acc, val) => acc + val);

        if (totalGas < totalCost) {
            return -1;
        }

        let totalGain = 0;
        let result = 0;

        for (let i = 0; i < gas.length; i++) {
            const currentGain = gas[i] - cost[i];
            totalGain += currentGain;

            //While traversing if gain becomes zero then the result is invalid
            if (totalGain < 0) {
                totalGain = 0;
                result = i + 1;
            }
        }

        return result;
    }
}
