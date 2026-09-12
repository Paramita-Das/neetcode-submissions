class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones) {
        let heap = new MaxPriorityQueue((num) => num);
        let newArr = [];
        if (stones.length < 2) {
            return stones[0]
        }
        for (let stone of stones) {
            heap.enqueue(stone);
        }
        while (heap.size() > 1) {
            let y = heap.dequeue();
            let x = heap.dequeue();
            if (x < y) {
                heap.enqueue(y - x)
            }
        }
        return heap.front() || 0
    }
}
