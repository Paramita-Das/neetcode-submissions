class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let result = [];
        for (let i = 0; i < nums.length; i++) {
        let product = 1;
           let j = 0;
           while (j < nums.length) {
           if (j === i) {
            j++;
            continue
            }
           product *= nums[j];
           j++;
        }
        result.push(product)
        }
        return result
    }
}
