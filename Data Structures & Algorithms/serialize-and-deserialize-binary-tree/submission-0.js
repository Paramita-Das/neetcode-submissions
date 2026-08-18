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

class Codec {
    /**
     * Encodes a tree to a single string.
     *
     * @param {TreeNode} root
     * @return {string}
     */
    serialize(root) {
        let result = [];
        function dfs(node) {
            if (!node) {
                result.push("N");
                return;
            }
            let str = node.val.toString()
            result.push(str);
            dfs(node.left);
            dfs(node.right)
        }
        dfs(root);
        return result.join(',')
    }

    /**
     * Decodes your encoded data to tree.
     *
     * @param {string} data
     * @return {TreeNode}
     */
    deserialize(data) {
        let str = data.split(',');
        let index = 0;
        function dfs() {
            let char = str[index++]
            if (char === 'N') return null;
            let node = new TreeNode(Number(char));
            node.left = dfs();
            node.right = dfs();
            return node;
     }  
        return dfs();
    }
}
