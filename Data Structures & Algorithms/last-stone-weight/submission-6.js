class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones) {
        let heap = new MaxPriorityQueue((num) => num);
        for (let stone of stones) {
            heap.enqueue(stone);
        }
        while (heap.size() > 1) {
            let y = heap.dequeue();
            let x = heap.dequeue();
            if (x !== y) {
                heap.enqueue(y - x)
            }
        }
        return heap.isEmpty() ? 0 : heap.front()
    }
}
