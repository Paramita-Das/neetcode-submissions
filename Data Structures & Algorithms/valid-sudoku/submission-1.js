class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        let rows = new Array(9).fill(0).map(() => new Set());
        let cols = new Array(9).fill(0).map(() => new Set());
        let boxes = new Array(9).fill(0).map(() => new Set())

        for (let row = 0; row < board.length; row++) {
            for (let col = 0; col < board[0].length; col++) {
            let cell = board[row][col];
            if (cell === '.') continue;
            let boxIndex = Math.floor(row / 3) * 3 + Math.floor(col / 3)

            if (rows[row].has(cell) || cols[col].has(cell) || boxes[boxIndex].has(cell)) {
                return false;
            }
            rows[row].add(cell);
            cols[col].add(cell);
            boxes[boxIndex].add(cell)
         }
        } 
        return true  
    }
}
