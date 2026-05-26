class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let result = [];
        let product = 1;
        let zeroCount = 0;
        for (let num of nums) {
            if (num === 0) {
                zeroCount++
            } else {
                product *= num
            }
        }
        for (let num of nums) {
            if (zeroCount > 1) {
                result.push(0)
            } else if (zeroCount === 1) {
                if (num === 0) {
                    result.push(product)
                } else {
                    result.push(0)
                }
            } else {
                result.push(product/num)
            }
        }
        return result
    }
}
