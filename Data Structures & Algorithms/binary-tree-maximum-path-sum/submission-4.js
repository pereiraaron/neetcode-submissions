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
    maxPathSum(root) {
        let result = -Infinity;

        function traverse(curr) {
            if (!curr) {
                return 0;
            }

            const leftMax = Math.max(0, traverse(curr.left));
            const rightMax = Math.max(0, traverse(curr.right));

            const currentPathSum = curr.val + leftMax + rightMax;

            result = Math.max(result, currentPathSum);

            return curr.val + Math.max(leftMax, rightMax);
        }

        traverse(root);

        return result;
    }
}
