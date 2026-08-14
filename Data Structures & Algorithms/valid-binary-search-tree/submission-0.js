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
     * @return {boolean}
     */
    isValidBST(root, left, right) {
        if (!root) {
            return true;
        }

        if (left !== null && root.val <= left) {
            return false;
        }

        if (right !== null && root.val >= right) {
            return false;
        }

        return (
            this.isValidBST(root.left, left, root.val) &&
            this.isValidBST(root.right, root.val, right)
        );
    }
}
