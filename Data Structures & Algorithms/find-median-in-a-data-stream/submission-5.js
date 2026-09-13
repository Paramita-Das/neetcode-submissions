class MedianFinder {
    constructor() {
        this.left = new MaxPriorityQueue((num) => num);
        this.right = new MinPriorityQueue((num) => num);
    }

    /**
     *
     * @param {number} num
     * @return {void}
     */
    addNum(num) {
        if (!this.left.isEmpty() && num > this.left.front()) {
            this.right.enqueue(num)
        } else {
        this.left.enqueue(num);
        } 
        if (this.left.size() > this.right.size() + 1) {
            this.right.enqueue(this.left.dequeue())
        } 
         if (this.left.size() < this.right.size()) {
            this.left.enqueue(this.right.dequeue())
        }   
    }

    /**
     * @return {number}
     */
    findMedian() {
        if (this.left.size() === this.right.size()) {
            let median = (this.left.front() + this.right.front()) / 2;
            return median
        } 
        return this.left.front()      
    }
}
