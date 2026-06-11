class MinStack {
    constructor() {
        this.stack = [];
        this.minStack = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        if (this.minStack.length > 0 ) {
            let minVal = Math.min(val, this.minStack[this.minStack.length - 1])
            this.minStack.push(minVal);
        }
         if (this.minStack.length === 0 ) {
            this.minStack.push(val);
        }
        return this.stack.push(val)
    }

    /**
     * @return {void}
     */
    pop() {
        this.minStack.pop();
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
        let min = this.minStack[this.minStack.length - 1]
        return min;
    }
}
