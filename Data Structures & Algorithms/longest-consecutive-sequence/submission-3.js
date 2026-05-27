class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let set = new Set(nums);
        let maxCount = 0;
        for (let num of set) {
           if (!set.has(num - 1)) {
                let currentNum = num;
                let streak = 1;
                while (set.has(currentNum + 1)) {
                    currentNum++
                    streak++;
                }
                maxCount = Math.max(maxCount, streak)
           }
        }
        return maxCount;
    }
}
