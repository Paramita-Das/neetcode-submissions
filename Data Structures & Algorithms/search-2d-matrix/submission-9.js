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
              let left = 0;
       let right = n - 1
            let lastElement = matrix[row][n - 1];
            let firstElement = matrix[row][0]
            if (target > lastElement) {
                row++
            }  else if (target < firstElement){
                return false
            }
            else {
               while (left <= right) {
                let mid = Math.floor((left + right) / 2);
                if (target === matrix[row][mid]) {
                    return true
                } else if (target > matrix[row][mid]) {
                    left = mid + 1
                } else {
                    right = mid - 1
                }
               }
               return false
            }
        }
        return false
    }
}
