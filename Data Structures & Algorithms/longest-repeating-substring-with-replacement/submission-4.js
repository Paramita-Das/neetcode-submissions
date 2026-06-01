class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let arr = s.split("");
        let map = new Map();
        let maxLen = 0;
        let maxChar = null;
        let maxFreq = 0;
        let left = 0;
        for (let right = 0; right < arr.length; right++) {
            map.set(s[right], (map.get(s[right]) || 0) + 1);
            maxFreq = Math.max(maxFreq, map.get(s[right]));
            let windowSize = right - left + 1;
            let replacement = windowSize - maxFreq;
            while (replacement > k) {
                map.set(s[left], map.get(s[left]) - 1)
                left++;
                replacement--
            } 
            maxLen = Math.max(maxLen, right - left + 1)
        }
        return maxLen;
    }
}
