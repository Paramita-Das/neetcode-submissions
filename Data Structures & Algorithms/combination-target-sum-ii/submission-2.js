class Solution {
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    combinationSum2(candidates, target) {
        let sortedArr = candidates.sort((a, b) => a - b);
        let result = [];
       function backtrack(start, path, sum) {
        if (sum > target) return;
        if (sum === target) {
            result.push([...path]);
            return;
        }
        for (let i = start; i < sortedArr.length; i++) {
            if (sum + sortedArr[i] > target) return;
            if (i > start && candidates[i] === candidates[i - 1]) continue;
            path.push(sortedArr[i]);
            backtrack(i + 1, path, sum + sortedArr[i]);
            path.pop()
        }
       }
       backtrack(0, [], 0)
       return result
    }
}
