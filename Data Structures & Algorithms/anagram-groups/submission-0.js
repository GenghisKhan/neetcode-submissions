class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const groups = [];
        const map = new Map();
        for (const str of strs) {
            const sortedArr = str.split('').sort();
            const count = {};
            for (const char of sortedArr) {
                count[char] = count[char] + 1 || 1;
            }
            const strCount = JSON.stringify(count);
            if (map.has(strCount)) {
                map.get(strCount).push(str);
            } else {
                map.set(strCount, [str]);
            }
        }
        for (const item of map.values()) {
            groups.push(item);
        }
        return groups;
    }
}