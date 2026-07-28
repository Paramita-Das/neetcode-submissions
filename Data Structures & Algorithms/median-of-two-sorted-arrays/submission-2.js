class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1, nums2) {
       let merged = [];
       let left = 0;
       let right = 0;
       while (left < nums1.length && right < nums2.length) {
        if (nums1[left] <= nums2[right]) {
            merged.push(nums1[left]);
            left++
        } else {
            merged.push(nums2[right]);
            right++
        }
       }
        while (left < nums1.length) {
            merged.push(nums1[left]);
            left++
        } 
        while (right < nums2.length) {
            merged.push(nums2[right]);
            right++
        }
        let n = merged.length;
        if (n % 2 === 0) {
            let mid = (merged[n / 2 - 1] + merged[n / 2]) / 2
            return mid
        } else {
            return merged[Math.floor(n / 2)]
        }
    }
}
