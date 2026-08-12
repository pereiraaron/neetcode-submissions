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

        if (!root) {
            return result;
        }

        let queue = [root];

        while (queue.length) {
            let levelArray = [];
            let level = queue.length;

            for (let i = 0; i < level; i++) {
                const curr = queue.shift();

                if (i === 0) {
                    result.push(curr.val);
                }

                if (curr.right) {
                    queue.push(curr.right);
                }
                if (curr.left) {
                    queue.push(curr.left);
                }
            }
        }

        return result;
    }
}
