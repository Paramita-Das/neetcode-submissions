class TrieNode {
    constructor() {
        this.children = new Map();
        this.isEndOfWord = false
    }
}

class WordDictionary {
    constructor() {
        this.root = new TrieNode()
    }

    /**
     * @param {string} word
     * @return {void}
     */
    addWord(word) {
        let current = this.root
        for (let char of word) {
            if (!current.children.has(char)) {
                current.children.set(char, new TrieNode())
            }
            current = current.children.get(char)
        }
        current.isEndOfWord = true
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        function dfs(node, index) {
            if (index === word.length) {
                return node.isEndOfWord
            }
            let char = word[index];
            if (char === '.') {
                for (let child of node.children.values()) {
                    if (dfs(child, index + 1)) {
                        return true;
                    }
                }
                return false
            } else {
                if (!node.children.has(char)) {
                    return false
                }
                return dfs (node.children.get(char), index + 1)
            }
        }
        return dfs(this.root, 0)
    }
}
