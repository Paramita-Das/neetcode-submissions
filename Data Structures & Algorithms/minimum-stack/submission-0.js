class MinStack {
    constructor(stack) {
        this.stack = []
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        return this.stack.push(val)
    }

    /**
     * @return {void}
     */
    pop() {
        return this.stack.pop()
    }

    /**
     * @return {number}
     */
    top() {
        let top = this.stack[this.stack.length - 1];
        return top;
    }

    /**
     * @return {number}
     */
    getMin() {
        let min = Math.min(...this.stack);
        return min;
    }
}
