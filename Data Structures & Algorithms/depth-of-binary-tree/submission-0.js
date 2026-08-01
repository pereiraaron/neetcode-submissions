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
    maxDepth(root) {
        if (!root) {
            return 0;
        }

        let maxDepth = 1;

        function traverse(curr, depth) {
            maxDepth = Math.max(depth, maxDepth);

            if (curr.left) {
                traverse(curr.left, depth + 1);
            }

            if (curr.right) {
                traverse(curr.right, depth + 1);
            }
        }

        traverse(root, 1);

        return maxDepth;
    }
}
