class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const length = nums.length;
        const result = new Array(length).fill(1);
        for (let i = 0; i < length; i++) {
            for (let j = 0; j < length; j++) {
                if (i !== j) {
                    result[i] = result[i] * nums[j];
                }
            }
        }
        return result;
    }
}
