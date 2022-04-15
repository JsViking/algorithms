function allAnagrams(array) {
    const sorted = array.map(string => string.split('').sort().join(''))
    for (let i = 1; i < sorted.length; i++) {    
        if (sorted[0] !== sorted[i]) return false;
    }
    return true
}

console.log(allAnagrams(['abcd', 'bdac', 'cabd'])) // true
console.log(allAnagrams(['abcd', 'bdXc', 'cabd'])) // false