class MinStack {
    constructor() {
        this.mainStack = [];
        this.minValStack = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.mainStack.push(val);
        this.minValStack.push(Math.min(val, this.getMin() ?? val));
    }

    /**
     * @return {void}
     */
    pop() {
        this.mainStack.pop();
        this.minValStack.pop();
    }

    /**
     * @return {number}
     */
    top() {
        return this.mainStack.at(-1);
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.minValStack.at(-1);
    }
}
