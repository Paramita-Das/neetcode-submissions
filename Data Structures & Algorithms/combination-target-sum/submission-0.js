class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        let sortedArr = nums.sort((a, b) => a - b)
        let result = [];     
        function backtrack(start, path, sum) {
            if (sum > target) return;
            if (sum === target) {
                result.push([...path]);
                return;
            }
            for (let i = start; i < sortedArr.length; i++) {
                if (sum + sortedArr[i] > target) break;
                path.push(sortedArr[i]);
                backtrack(i, path, sum + sortedArr[i]);
                path.pop()
            }
        }
        backtrack(0, [], 0);
        return result;
    }
}
