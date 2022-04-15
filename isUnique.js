function isUnique(string) {
  for (let i = 0; i < string.length; i++) {
    const char = string[i]
    const entry = string.lastIndexOf(char)
    if (i !== entry) return false
  }
  return true;
}

console.log(isUnique('abcdef')) // -> true
console.log(isUnique('1234567')) // -> true
console.log(isUnique('abcABC')) // -> true
console.log(isUnique('abcadef')) // -> false