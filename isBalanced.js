function isBalanced(string) {
    const validation = '(){}[]';
    const hash = {
        '{':'}',
        '(':')',
        '[':']'
    }
    const stack = []

    for (char of string) {
        if (!validation.includes(char)) continue;
        if (hash[char]) {
            stack.push(char)
        } else {
            const first = stack.pop();
            if (hash[first] !== char) return false;
        }
    }
    return Boolean(stack.length === 0);
}

console.log(isBalanced('(x + y) - (4)')) // -> true
console.log(isBalanced('(((10 ) ()) ((?)(:)))')) // -> true
console.log(isBalanced('[{()}]')) // -> true
console.log(isBalanced('(50)(')) // -> false
console.log(isBalanced('[{]}')) // -> false