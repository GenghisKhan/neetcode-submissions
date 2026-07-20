class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const length = temperatures.length;
        const result = Array(length).fill(0);
        const stack = [];
        for (let i = 0; i < length; i++) {
            while (stack.length > 0 && temperatures[i] > stack.at(-1)[0]) {
                const [, index] = stack.pop();
                result[index] = i - index;
            }
            stack.push([temperatures[i], i]);
        }
        return result;
    }
}
