class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1, nums2) {
       let merged = [...nums1, ...nums2];
       merged.sort((a, b) => a - b);
       let n = merged.length 
       if ((n % 2) === 0) {
        let mid = (merged[(n / 2) - 1] + merged[n / 2]) / 2;
        return mid
       } else {
        return merged[Math.floor(n / 2)]
       }
    }
}
