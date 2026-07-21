class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let left = 0;
        let right = matrix.length - 1;
        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            if (target >= matrix[mid][0] && target <= matrix[mid].at(-1)) {
                return this.BinarySearch(matrix[mid], target);
            } else if (target > matrix[mid].at(-1)) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return false;
    }

    BinarySearch(nums, target) {
        let left = 0;
        let right = nums.length - 1;
        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            if (target > nums[mid]) {
                left = mid + 1;
            } else if (target < nums[mid]) {
                right = mid - 1;
            } else {
                return true;
            }
        }
        return false;
    }
}
