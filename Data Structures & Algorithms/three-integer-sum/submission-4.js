class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        const result = [];
        const sortedNums = nums.sort((a, b) => a - b);
        const length = sortedNums.length;
        for (let i = 0; i < length; i++) {
            if (i > 0 && sortedNums[i] === sortedNums[i - 1]) continue;
            let leftP = i + 1;
            let rightP = length - 1;
            const curVal = sortedNums[i];
            while (leftP < rightP) {
                const leftVal = sortedNums[leftP];
                const rightVal = sortedNums[rightP];
                const sum = curVal + leftVal + rightVal;
                if (sum > 0) {
                    rightP--;
                } else if (sum < 0) {
                    leftP++;
                } else {
                    result.push([curVal, leftVal, rightVal]);
                    while (leftP < rightP && sortedNums[leftP] === sortedNums[leftP + 1]) leftP++;
                    while (leftP < rightP && sortedNums[rightP] === sortedNums[rightP - 1]) rightP--;
                    leftP++;
                    rightP--;
                }
            }
        }
        return result;
    }
}
