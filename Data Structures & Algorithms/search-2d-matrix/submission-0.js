class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        // concatenate into one array (matrix.flat())
        // or search each row in the array
        const flatArr = matrix.flat();
        let left = 0;
        let right = flatArr.length - 1;
        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            if (target > flatArr[mid]) {
                left = mid + 1;
            } else if (target < flatArr[mid]) {
                right = mid - 1;
            } else {
                return true;
            }
        }
        return false;
    }
}
