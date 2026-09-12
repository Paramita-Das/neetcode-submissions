class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    kClosest(points, k) {
        let heap = new MaxPriorityQueue((item) => item.distance);
        let result = [];
        for (let [x, y] of points) {
            const distance = x * x + y * y;
            heap.enqueue({point: [x, y], distance});
            if (heap.size() > k) {
                heap.dequeue()
            }
        }
        for (let {point, dist} of heap) {
            result.push(point)
        }
        return result;
    }
}
