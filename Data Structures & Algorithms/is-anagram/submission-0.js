class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const s_arr = s.split('');
        const t_arr = t.split('');
        if (s_arr.length !== t_arr.length) {
            return false;
        }
        const map = new Map();
        for (let i = 0; i < s_arr.length; i++) {
            const item = s_arr[i];
            const key = map.get(item);
            const val = key === undefined ? 0 : key + 1;
            map.set(item, val);
        }
        for (let i = 0; i < t_arr.length; i++) {
            const item = t_arr[i];
            const val = map.get(item);
            if (val === undefined || val < 0) {
                return false;
            }
            map.set(item, val - 1);
        }
        return true;
    }
}
