class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        function compareMaps(map1, map2) {
            if (map1.size !== map2.size) return false;
            for (let [key, val] of map1) {
                if (map2.get(key) !== val) {
                    return false
                }
            }
            return true
        }
        if (s1.length > s2.length) return false;
        let map = new Map();
        for (let char of s1) {
            map.set(char, (map.get(char) || 0) + 1)
        } 
        let runningMap = new Map();
        let left = 0;
        for (let right = 0; right < s2.length; right++) {
            let windowSize = right - left + 1;
            runningMap.set(s2[right], (runningMap.get(s2[right]) || 0) + 1);
            if (windowSize > s1.length) {
                runningMap.set(s2[left], runningMap.get(s2[left]) - 1);
                if (runningMap.get(s2[left])  === 0) {
                    runningMap.delete(s2[left])
                }
                left++
            }
            if (compareMaps(runningMap, map)) {
                return true
            }      
        }
        return false;
    }
}
