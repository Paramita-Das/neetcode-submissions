class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
      let map = new Map();
      for (let str of strs) {
        let sorted = str.split('').sort().join('')
        if (map.has(sorted)) {
            map.get(sorted).push(str)
        } else {
        map.set(sorted, [str])
        }
      }
      return Array.from(map.values())
    }
}
