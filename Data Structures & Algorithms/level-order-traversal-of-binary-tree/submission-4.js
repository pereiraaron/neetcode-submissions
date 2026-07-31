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

        let queue = [root];

        while (queue.length) {
            let levelArr = [];
            let level = queue.length;

            for (let i = 0; i < level; i++) {
                const curr = queue.shift();
                levelArr.push(curr.val);
                if (curr.left) {
                    queue.push(curr.left);
                }
                if (curr.right) {
                    queue.push(curr.right);
                }
            }

            result.push(levelArr);
        }

        return result;
    }
}
