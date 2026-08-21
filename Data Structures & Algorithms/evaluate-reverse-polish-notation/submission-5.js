class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        let stack = [];
        function getOperation(operator, a, b) {
            let result;
            switch(operator) {
                case "+": 
                    result = a + b;
                    break;
                case "-": 
                result = a - b;
                break;
                case "*": 
                result = a * b;
                break;
                case "/": 
                result = Math.trunc(a / b);
                break
            }
            return result
        }
        for (let i = 0; i < tokens.length; i++) {
           if (tokens[i] === "+" || tokens[i] === "-" || tokens[i] === "*" || tokens[i] === "/") { 
            const b = stack.pop();
            const a = stack.pop();
            let result = getOperation(tokens[i], a, b);     
            stack.push(result)
           } else {
            stack.push(Number(tokens[i]))
           }
        }
        return stack.pop();
    }
}
