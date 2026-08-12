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
    rightSideView(root) {
        let result = [];

        function traverse(curr, depth) {
            if (!curr) {
                return;
            }

            //since we need only one element per level
            if (result.length === depth) {
                result.push(curr.val);
            }

            //Traverse right first so the above condition pushes right element first
            traverse(curr.right, depth + 1);
            traverse(curr.left, depth + 1);
        }

        traverse(root, 0);
        return result;
    }
}
