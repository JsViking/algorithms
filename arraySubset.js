function arraySubset(source, subset) {
    if (subset.length > source.length) return false;
    const copySource = [...source]
    for (let i = 1; i< subset.length; i++) {
        const index = copySource.indexOf(subset[i])
        if (index >= 0) {
            copySource.splice(index, 1);
        } else {
            return false;
        }
    }
    return true
}

console.log(arraySubset([2, 1, 3], [1, 2, 3])) // -> true
console.log(arraySubset([2, 1, 1, 3], [1, 2, 3])) // -> true
console.log(arraySubset([1, 1, 1, 3], [1, 3, 3])) // -> false
console.log(arraySubset([1, 2], [1, 2, 3])) // -> false