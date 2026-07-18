class MyStack {
    constructor() {
        this.queue = [];
    }

    /**
     * @param {number} x
     * @return {void}
     */
    push(x) {
        this.queue.push(x);
    }

    /**
     * @return {number}
     */
    pop() {
        let length = this.queue.length;

        while (length > 1) {
            this.queue.push(this.queue.shift());
            length--;
        }

        return this.queue.shift();
    }

    /**
     * @return {number}
     */
    top() {
        let length = this.queue.length;

        while (length > 1) {
            this.queue.push(this.queue.shift());
            length--;
        }

        const top = this.queue[0];
        this.queue.push(this.queue.shift());
        return top;
    }

    /**
     * @return {boolean}
     */
    empty() {
        return this.queue.length === 0;
    }
}

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
