class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        let m = board.length;
        let n = board[0].length;
        for (let row = 0; row < m; row++) {
            const seen = new Set();

            for (let col = 0; col < n; col++) {
                const cell = board[row][col];

                if (cell === ".") continue;

                if (seen.has(cell)) return false;

                seen.add(cell);
            }
        }
         for (let col = 0; col < n; col++) {
            const seen = new Set();

            for (let row = 0; row < m; row++) {
                const cell = board[row][col];

                if (cell === ".") continue;

                if (seen.has(cell)) return false;

                seen.add(cell);
            }
        }
        for (let boxRow = 0; boxRow < 9; boxRow += 3) {
    for (let boxCol = 0; boxCol < 9; boxCol += 3) {

        const seen = new Set();
        for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {

        const cell = board[boxRow + i][boxCol + j];
          if (cell === ".") continue;

                if (seen.has(cell)) return false;

                seen.add(cell);

    }
}

        // iterate over the 3×3 box here

    }
}
        return true
    }
}
