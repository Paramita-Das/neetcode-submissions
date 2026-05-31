class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let n = height.length;
        let left = 0;
        let right = n - 1;
        let leftMax = 0;
        let rightMax = 0;
        let water = 0;
       while (left < right) {
        leftMax = Math.max(leftMax, height[left]);
        rightMax = Math.max(rightMax, height[right]);
       if (leftMax < rightMax) {
        water += leftMax - height[left];
        left++
       } else {
        water += rightMax - height[right];
        right--
       }
       }
        return water
    }
}
