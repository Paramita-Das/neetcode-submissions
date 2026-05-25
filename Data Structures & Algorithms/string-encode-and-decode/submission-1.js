class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let result = ""
   for (let word of strs) {
    let newStr = `${word.length}#${word}`
    result += newStr
   }
   return result
    }
    /**
     * @param {string} str
     * @returns {string[]}
     */
   decode(str) {
    let result = [];
    let i = 0;

    while (i < str.length) {

        // Find #
        let j = i;

        while (str[j] !== '#') {
            j++;
        }

        // Extract length
        let len = Number(str.slice(i, j));

        // Extract word
        let word = str.slice(j + 1, j + 1 + len);

        result.push(word);

        // Move pointer to next encoded word
        i = j + 1 + len;
    }

    return result;
}
}
