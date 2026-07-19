class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const result = [];
        const count = {};
        for (const num of nums) {
            count[num] = count[num] + 1 || 1;
        }
        const sortedArray = Object.entries(count).sort((a, b) => b[1] - a[1]);
        for (let i = 0; i < k; i++) {
            result.push(sortedArray[i][0]);
        }
        return result;
    }
}
