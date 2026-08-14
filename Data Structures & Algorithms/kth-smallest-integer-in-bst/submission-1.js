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
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root, k) {
        let result = [];

        //Inorder travel will always return sorted BST
        function traverse(curr) {
            if (curr.left) {
                traverse(curr.left);
            }
            result.push(curr.val);
            if (curr.right) {
                traverse(curr.right);
            }
        }
        traverse(root);

        return result[k - 1];
    }
}
