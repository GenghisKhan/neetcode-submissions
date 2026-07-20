class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const cleanStr = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
        const length = cleanStr.length;
        let leftPointer = 0;
        let rightPointer = length - 1;
        while (leftPointer < rightPointer) {
            if (cleanStr[leftPointer] !== cleanStr[rightPointer]) {
                return false;
            }
            leftPointer++;
            rightPointer--;
        }
        return true;
    }
}
