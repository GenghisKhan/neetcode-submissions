class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        for (const row of matrix) {
            let left = 0;
            let right = row.length - 1;
            while (left <= right) {
                const mid = Math.floor((left + right) / 2);
                if (target > row[mid]) {
                    left = mid + 1;
                } else if (target < row[mid]) {
                    right = mid - 1;
                } else {
                    return true;
                }
            }
        }
        return false;
    }
}
