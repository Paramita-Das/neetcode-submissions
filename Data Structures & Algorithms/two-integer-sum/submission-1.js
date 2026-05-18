class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        for (let left = 0; left < nums.length; left++) {
            for (let right = left + 1; right < nums.length; right++) {
                let sum = nums[left] + nums[right];
                if (sum === target) {
                    return [left, right]
                }
            }
        }
    }
}