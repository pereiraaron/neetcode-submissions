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
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSubtree(root, subRoot) {
        const hashedRoot = this.serializeTree(root);
        const hashedSubRoot = this.serializeTree(subRoot);

       return hashedRoot.includes(hashedSubRoot);
    }

    serializeTree(root) {
        let hash = "";
        function traverse(curr) {
            if (!curr) {
                hash += "-" + "#";
                return;
            }

            hash += "-" + curr.val;
            traverse(curr.left);
            traverse(curr.right);
        }

        traverse(root);
        return hash;
    }
}
