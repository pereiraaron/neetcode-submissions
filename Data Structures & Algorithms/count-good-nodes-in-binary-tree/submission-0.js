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

        function traverse(curr, max) {
            if (curr.val >= max) {
                result++;
                max = curr.val;
            }

            if (curr.left) {
                traverse(curr.left, max);
            }
            if (curr.right) {
                traverse(curr.right, max);
            }
        }

        traverse(root, -Infinity);

        return result;
    }
}
