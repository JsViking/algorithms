function fibonacci(n) {
    const result = [1,1]

    if (result.length > n) {
        return result.slice(0, n);
    };

    const recursion = (n , result) => {
        const length = result.length;
        if (length === n) return result;
        const value = result[length - 1] + result[length - 2];
        result.push(value);
        recursion(n, result);
    }
    recursion(n, result);
    return result;
}

console.log(fibonacci(8)) // -> [1, 1, 2, 3, 5, 8, 13, 21]
console.log(fibonacci(15)) // -> [ 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610 ]