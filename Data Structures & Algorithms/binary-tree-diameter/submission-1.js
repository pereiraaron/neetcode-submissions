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
    diameterOfBinaryTree(root) {
        let maxDiameter = 0;

        function findDepth(curr) {
            if (!curr) {
                return 0;
            }

            let leftDepth = findDepth(curr.left);
            let rightDepth = findDepth(curr.right);
            maxDiameter = Math.max(maxDiameter, leftDepth + rightDepth);

            return 1 + Math.max(leftDepth, rightDepth);
        }

        findDepth(root);
        return maxDiameter;
    }
}
