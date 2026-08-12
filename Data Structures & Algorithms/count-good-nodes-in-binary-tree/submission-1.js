/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    goodNodes(root) {
        let result = 0;
        let queue = [[root, -Infinity]];

        while (queue.length) {
            const [curr, max] = queue.pop();

            if (curr.val >= max) {
                result++;
            }
            const currentMax = Math.max(max, curr.val);

            if (curr.left) {
                queue.push([curr.left, currentMax]);
            }
            if (curr.right) {
                queue.push([curr.right, currentMax]);
            }
        }

        return result;
    }
}
