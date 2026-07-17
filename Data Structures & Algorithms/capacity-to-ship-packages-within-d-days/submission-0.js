class Solution {
    /**
     * @param {number[]} weights
     * @param {number} days
     * @return {number}
     */
    shipWithinDays(weights, days) {
        let left = Math.max(...weights)
        let right = weights.reduce((acc, curr) => acc += curr, 0);
        function canShip(k) {
            let count = 1;
            let sum = 0;
            for (let weight of weights) {
                if (sum + weight <= k) {
                    sum += weight
                } else {
                count++
                sum = weight
                }
            } 
            return count <= days
        }
        while (left <= right) {
            let mid = Math.floor((left + right)/ 2);
            if (canShip(mid)) {
                right = mid -1
            } else {
                left = mid + 1
            }
        }
        return left
    }
}
