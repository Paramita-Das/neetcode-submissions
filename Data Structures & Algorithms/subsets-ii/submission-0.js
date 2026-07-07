class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsetsWithDup(nums) {
        const sortedArr = nums.sort((a, b) => a - b);
        let result = [];
        function backtrack(start, path) {
            result.push([...path]);
            for (let i = start; i < sortedArr.length; i++) {
                if (i > start && sortedArr[i] === sortedArr[i - 1]) continue;
                path.push(sortedArr[i]);
                backtrack(i + 1, path);
                path.pop()
            }
        }
        backtrack(0, []);
        return result;
    }
}
