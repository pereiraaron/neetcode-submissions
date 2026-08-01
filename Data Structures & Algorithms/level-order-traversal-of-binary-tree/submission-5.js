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
     * @return {number[][]}
     */
    levelOrder(root) {
        let result = [];
        if (!root) {
            return result;
        }

        function traverse(curr, level) {
            if (!result[level]) {
                result[level] = [];
            }
            result[level].push(curr.val);
            if (curr.left) {
                traverse(curr.left, level + 1);
            }
            if (curr.right) {
                traverse(curr.right, level + 1);
            }
        }
        traverse(root, 0);
        return result;
    }
}
