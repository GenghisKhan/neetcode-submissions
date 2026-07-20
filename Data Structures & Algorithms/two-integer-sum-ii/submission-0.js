class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let leftP = 0;
        let rightP = numbers.length - 1;
        while (leftP < rightP) {
            const sum = numbers[leftP] + numbers[rightP];
            if (sum > target) {
                rightP--;
            } else if (sum < target) {
                leftP++;
            } else {
                break;
            }
        }
        return [++leftP, ++rightP];
    }
}
