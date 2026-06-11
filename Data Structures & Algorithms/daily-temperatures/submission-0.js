class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        let n = temperatures.length;
        let result = Array(n).fill(0);
        let stack = [];
        for (let i = 0; i < n; i++) {
            while (stack.length && temperatures[i] > temperatures[stack[stack.length - 1]]) {
                let top = stack.pop();
                let days = i - top; 
                result[top] = days
            } 
            stack.push(i)
        }
        return result
    }
}
