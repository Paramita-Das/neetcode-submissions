class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let m = matrix.length;
        let n = matrix[0].length;
        let row = 0;
        while (row < m) {
            let lastElement = matrix[row][n - 1];
            let firstElement = matrix[row][0]
            if (target > lastElement) {
                row++
            }  else if (target < firstElement){
                return false
            }
            else {
                for (let col = 0; col < n; col++) {
                    if (matrix[row][col] === target) {
                        return true
                    }
                }
                row++
            }
        }
        return false
    }
}
