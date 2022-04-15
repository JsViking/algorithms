function highestFrequency(array) {
    const map = {};
    let max = 0;
    let maxElem;
    for (string of array) {
        if (! map[string])  map[string] = 1
        else  map[string] += 1
        if (max < map[string]) {
            max = map[string]
            maxElem = string
        } 
    }
    return maxElem;
}

console.log(highestFrequency(['a', 'b', 'c', 'c', 'd', 'e'])) // -> c
console.log(highestFrequency(['abc', 'def', 'abc', 'def', 'abc'])) // -> abc
console.log(highestFrequency(['abc', 'def'])) // -> abc
console.log(highestFrequency(['abc', 'abc', 'def', 'def', 'def', 'ghi', 'ghi', 'ghi', 'ghi' ])) // -> ghi