class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let map = new Map();
        let heap = new MinPriorityQueue((x) => x.freq );
        for (let num of nums) {
            map.set(num, (map.get(num) || 0) + 1);
        }
        for (let [val, freq] of map.entries()) {
            heap.enqueue({val, freq});
            if (heap.size() > k) {
                heap.dequeue();
            }
        }
        return heap.toArray().map((item) => item.val)
    }
}
