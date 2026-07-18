class MyStack {
    constructor() {
        this.queue1 = [];
        this.queue2 = [];
    }

    /**
     * @param {number} x
     * @return {void}
     */
    push(x) {
        this.queue1.push(x);
    }

    /**
     * @return {number}
     */
    pop() {
        while (this.queue1.length > 1) {
            this.queue2.push(this.queue1.shift());
        }

        const poppedValue = this.queue1.shift();

        [this.queue1, this.queue2] = [this.queue2, this.queue1];

        return poppedValue;
    }

    /**
     * @return {number}
     */
    top() {
        while (this.queue1.length > 1) {
            this.queue2.push(this.queue1.shift());
        }
        //peek so it is valid
        const lastElement = this.queue1[0];

        this.queue2.push(this.queue1.shift());
        [this.queue1, this.queue2] = [this.queue2, this.queue1];

        return lastElement;
    }

    /**
     * @return {boolean}
     */
    empty() {
        return this.queue1.length === 0;
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
