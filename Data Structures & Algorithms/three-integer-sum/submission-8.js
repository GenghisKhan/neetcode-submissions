class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums.sort((a, b) => a - b);
        const result = [];
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] > 0) break;
            if (i > 0 && nums[i] === nums[i - 1]) continue;
            let leftP = i + 1;
            let rightP = nums.length - 1;
            const curVal = nums[i];
            while (leftP < rightP) {
                const leftVal = nums[leftP];
                const rightVal = nums[rightP];
                const sum = curVal + leftVal + rightVal;
                if (sum > 0) {
                    rightP--;
                } else if (sum < 0) {
                    leftP++;
                } else {
                    result.push([curVal, leftVal, rightVal]);
                    leftP++;
                    rightP--;
                    while (leftP < rightP && nums[leftP] === nums[leftP - 1]) {
                        leftP++;
                    }
                }
            }
        }
        return result;
    }
}
