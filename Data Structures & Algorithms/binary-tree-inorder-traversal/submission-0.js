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
     * @return {number[]}
     */
    inorderTraversal(root) {
        let result = [];

        //left -> root -> right
        function traverse(curr) {
            if (!curr) {
                return;
            }

            traverse(curr.left);
            result.push(curr.val);
            traverse(curr.right);
        }

        traverse(root);

        return result;
    }
}
