class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    maxAreaOfIsland(grid) {
        let m = grid.length;
        let n = grid[0].length;
        function dfs(row, col) {
            if (row < 0 || col < 0 || row >= m || col >= n || grid[row][col] === 0) return 0;
            grid[row][col] = 0;
            const area = 1 + dfs(row + 1, col)
             + dfs(row - 1, col)
              + dfs(row, col - 1)
               + dfs(row, col + 1)

               return area;
        }
        let maxNode = 0;
        for (let i = 0; i < m; i++) {
            for (let j = 0; j < n; j++) {
                if (grid[i][j] === 1) {
                    let nodes = dfs(i, j, 0);
                    maxNode = Math.max(nodes, maxNode)
                }
            }
        }
        return maxNode
    }
}
