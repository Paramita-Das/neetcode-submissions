class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let n = heights.length
        let left = 0;
        let right = n - 1;
        let maxArea = 0;
        while (left < right) {
            let minHeight = Math.min(heights[left], heights[right]);
            let width = right - left;
            let area = width * minHeight;
            maxArea = Math.max(area, maxArea) 
            if (heights[left] > heights[right]) {
                right--
            } else {
                left++
            }
        }
        return maxArea;
    }
}
