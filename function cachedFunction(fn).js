function cachedFunction(fn) {
    const cache = {};

    return function(n) {
        if(cache[n]) return cache[n] 
        const result = fn(n);
        cache[n] = result;
        return result;
    }
}


function factorial(n) {
    let result = 1
    while(n != 1) {
        result *= n
        n -= 1
    }
    return result;
}


const cachedFactorial = cachedFunction(factorial)
console.log('@@@ ', cachedFactorial(5))
console.log('@@@ ', cachedFactorial(5))
console.log('@@@ ', cachedFactorial(5))