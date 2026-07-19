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
            if (char in map) {
                if (stack.at(-1) === map[char]) {
                    stack.pop();
                } else {
                    return false;
                }
            } else {
                stack.push(char);
            }
        }
        if (stack.length === 0) {
            return true;
        }
        return false;
    }
}
