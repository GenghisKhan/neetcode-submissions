class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) {
            return false;
        }
        const map = new Map();
        for (const char of s) {
            const val = map.get(char);
            map.set(char, val ? val + 1 : 1);
        }
        for (const char of t) {
            const val = map.get(char);
            if (val === undefined || val === 0) {
                return false;
            }
            map.set(char, val - 1);
        }
        return true;
    }
}
