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
    preorderTraversal(root) {
        if (!root) {
            return [];
        }

        let stack = [root];
        let result = [];

        while (stack.length) {
            const curr = stack.pop();
            result.push(curr.val);
            if (curr.right) {
                stack.push(curr.right);
            }
            if (curr.left) {
                stack.push(curr.left);
            }
        }

        return result;
    }
}
