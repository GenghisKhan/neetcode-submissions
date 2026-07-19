class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const map = {
            ')': '(',
            '}': '{',
            ']': '['
        };
        const stack = [];
        for (const char of s) {
            if (char === '(' || char === '{' || char === '[') {
                stack.push(char);
            } else if (stack.at(-1) === map[char]) {
                stack.pop();
            } else {
                return false;
            }
        }
        if (stack.length === 0) {
            return true;
        }
        return false;
    }
}
