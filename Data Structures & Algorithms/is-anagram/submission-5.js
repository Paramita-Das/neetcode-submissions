class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false
        let map = new Map();
        for (let char of s) {
            map.set(char, (map.get(char) || 0 ) + 1);
        }
        for (let str of t) {
            if (!map.has(str) || map.get(str) === 0) {
                return false
            }
            map.set(str, map.get(str) - 1)
        }
        return true
    }
}
