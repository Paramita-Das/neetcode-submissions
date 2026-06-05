class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
    let openingBracket = ["(", "{", "["];
    let closingBracket = [")", "}","]"];
    let map = new Map([
        [")", "("],
        ["]", "["],
        ["}", "{"]
        ]);
        let stack = [];
        for (let str of s) {
            if (openingBracket.includes(str)) {
                stack.push(str)
            } else if (closingBracket.includes(str) && map.get(str) === stack[stack.length - 1]) {
                stack.pop(str);
            } else {
                return false
            }
        }
        return stack.length === 0
    }
}
