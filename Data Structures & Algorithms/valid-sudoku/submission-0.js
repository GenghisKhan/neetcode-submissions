class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const MAX_LENGTH = 9;
        const numRows = board?.length;
        if (numRows !== MAX_LENGTH) return false;
        const colSeen = Array.from({ length: MAX_LENGTH }, () => new Set());
        const squareSeen = Array.from({ length: MAX_LENGTH }, () => 
            Array.from({ length: MAX_LENGTH }, () => new Set())
        );
        for (let i = 0; i < numRows; i++) {
            const numCols = board[i]?.length;
            if (numCols !== MAX_LENGTH) return false;
            const rowSeen = new Set();
            for (let j = 0; j < numCols; j++) {
                const val = board[i][j];
                if (val === '.') continue;
                const squareRow = Math.floor(i / 3);
                const squareCol = Math.floor(j / 3);
                if (rowSeen.has(val) ||
                    colSeen[j].has(val) ||
                    squareSeen[squareRow][squareCol].has(val)) {
                    return false;
                }
                rowSeen.add(val);
                colSeen[j].add(val);
                squareSeen[squareRow][squareCol].add(val);
            }
        }
        return true;
    }
}
