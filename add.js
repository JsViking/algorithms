function add(a, b) {
  if (!a) {
    return (a) => {
      return add(a, b)
    }
  }

  if (!b) {
    return (b) => {
      return add(a, b)
    }
  }

  return a + b
}

console.log(add(20, 22)); // -> 42
console.log(add(20)(22)); // -> 42
console.log(add(20)()(22));  // -> 42
console.log(add(20)()()()(22)) // -> 42
console.log(add(20)()()()()()()()()()()()(22)); // -> 42
console.log(add()(20)(22)); // -> 42
console.log(add()()()()(20)(22)); // -> 42
console.log(add()(20)()(22)); // -> 42
console.log(add()()()()()(20)()()()(22)); // -> 42