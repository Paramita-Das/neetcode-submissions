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
     * @return {number}
     */
    maxDepth(root) {
        let depth = 0;
        function dfs(node) {
            if (!node) return 0;
            let leftDepth = dfs(node.left);
            let rightDepth = dfs(node.right);
            return depth = 1 + Math.max(leftDepth, rightDepth);
        }
        dfs(root);
        return depth
    }
}
