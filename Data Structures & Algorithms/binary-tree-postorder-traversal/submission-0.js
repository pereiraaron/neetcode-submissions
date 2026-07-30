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
    postorderTraversal(root) {
         let result = [];

        //left -> right -> root
        function traverse(curr) {
            if (!curr) {
                return;
            }

            traverse(curr.left);
            traverse(curr.right);
            result.push(curr.val);
        }

        traverse(root);

        return result;
    }
}
