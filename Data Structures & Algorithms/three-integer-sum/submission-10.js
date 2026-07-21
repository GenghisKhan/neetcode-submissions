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
            while (leftP < rightP) {
                const sum = nums[i] + nums[leftP] + nums[rightP];
                if (sum > 0) {
                    rightP--;
                } else if (sum < 0) {
                    leftP++;
                } else {
                    result.push([nums[i], nums[leftP], nums[rightP]]);
                    leftP++;
                    rightP--;
                    while (nums[leftP] === nums[leftP - 1] && leftP < rightP) {
                        leftP++;
                    }
                }
            }
        }
        return result;
    }
}
