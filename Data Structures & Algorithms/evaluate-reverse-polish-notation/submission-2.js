class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const ops = {
            '+': (a, b) => a + b,
            '-': (a, b) => a - b,
            '*': (a, b) => a * b,
            '/': (a, b) => Math.trunc(a / b),
        };
        const stack = [];
        for (const token of tokens) {
            if (token in ops) {
                const b = stack.pop();
                const a = stack.pop();
                stack.push(ops[token](a, b));
            } else {
                stack.push(Number(token));
            }
        }
        return stack.pop();
    }
}
