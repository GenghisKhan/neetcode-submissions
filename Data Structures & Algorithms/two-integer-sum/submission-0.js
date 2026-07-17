class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const result = [0,1];
        const map = new Map();
        for (let i = 0; i < nums.length; i++) {
            const val = nums[i];
            const firstIndex = map.get(val);
            if (firstIndex !== undefined) {
                result[0] = firstIndex;
                result[1] = i;
                break;
            } else {
                map.set(target - val, i);
            }
        }
        return result;
    }
}
