class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
    let openingBracket = ["(", "{", "["];
    let map = new Map([
        [")", "("],
        ["]", "["],
        ["}", "{"]
        ]);
        let stack = [];
        for (let str of s) {
            if (openingBracket.includes(str)) {
                stack.push(str)
            } else if (map.get(str) === stack[stack.length - 1]) {
                stack.pop();
            } else {
                return false
            }
        }
        return stack.length === 0
    }
}
