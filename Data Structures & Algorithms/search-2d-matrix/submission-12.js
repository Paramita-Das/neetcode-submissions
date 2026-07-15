class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let m = matrix.length;
        let n = matrix[0].length;
      
      let left = 0;
      let right = m - 1
     while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        let first = matrix[mid][0];
        let last = matrix[mid][n - 1];
        if (target < first) {
            right = mid - 1
        } else if (target > last) {
            left = mid + 1
        } else {
            let colLeft = 0;
            let colRight = n - 1;
            while (colLeft <= colRight) {
                let colMid = Math.floor((colLeft + colRight) / 2);
                if (target === matrix[mid][colMid]) {
                    return true
                }
                else if (target < matrix[mid][colMid]) {
                    colRight = colMid - 1
                } else {
                    colLeft = colMid + 1
                } 
            }
            return false;
        }
     }
     return false
    }
}
