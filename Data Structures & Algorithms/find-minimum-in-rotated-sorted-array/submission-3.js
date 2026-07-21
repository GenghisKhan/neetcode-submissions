class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let left = 0;
        let right = nums.length - 1;
        let minNum = nums[0];
        while (left <= right) {
            if (nums[left] < nums[right]) {
                minNum = Math.min(minNum, nums[left]);
                break;
            }
            const mid = Math.floor((left + right) / 2);
            minNum = Math.min(minNum, nums[mid]);
            if (nums[mid] >= nums[left]) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return minNum;
    }
}
