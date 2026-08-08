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
     * @param {number[]} preorder
     * @param {number[]} inorder
     * @return {TreeNode}
     */
    buildTree(preorder, inorder) {
         let inorderMap = new Map()
            for (let i = 0; i < inorder.length; i++) {
                inorderMap.set(inorder[i], i)
            }
        function dfs(preStart, preEnd, inStart, inEnd) {
            if (preStart > preEnd || inStart > inEnd) return null;  
            let rootVal = preorder[preStart];
            let root = new TreeNode(rootVal);
            let k = inorderMap.get(rootVal);
            let leftSize = k - inStart;
            root.left = dfs(preStart + 1, preStart + leftSize, inStart, k - 1)
             root.right = dfs(preStart + leftSize + 1, preEnd, k + 1, inEnd)
             return root;
        }
       return dfs(0, preorder.length - 1, 0, inorder.length - 1)
    }
}
