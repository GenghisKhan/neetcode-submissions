class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const map = new Map();
        for (let i = 0; i < nums.length; i++) {
            const diff = target - nums[i];
            const seenIndex = map.get(diff);
            if (seenIndex !== undefined) {
                return [seenIndex, i];
            }
            map.set(nums[i], i);
        }
    }
}