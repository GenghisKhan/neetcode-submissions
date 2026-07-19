class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if (!nums?.length) return 0;
        const countArr = [];
        let count = 1;
        const sortedNums = nums.sort((a, b) => a - b);
        for (let i = 0; i < sortedNums.length - 1; i++) {
            const currentVal = sortedNums[i];
            const nextVal = sortedNums[i + 1];
            if (currentVal === nextVal) continue;
            if (currentVal + 1 === nextVal) {
                count++;
            } else {
                countArr.push(count);
                count = 1;
            }
        }
        countArr.push(count);
        return Math.max(...countArr);
    }
}
