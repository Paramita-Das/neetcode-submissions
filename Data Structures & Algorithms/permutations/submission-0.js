class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums) {
        let result = [];
        let used = Array(nums.length).fill(false)
        function backtrack(path) {
            if (path.length === nums.length) {
                result.push([...path]);
                return;
            }
            for (let i = 0; i < nums.length; i++) {
                if (used[i]) continue;
                path.push(nums[i]);
                used[i] = true
                backtrack(path);
                used[i] = false
                path.pop()
            }
        }
        backtrack([]);
        return result;
    }
}
