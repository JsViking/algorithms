function groupBy(collection, sort) {
    return collection.reduce((acc, cur) => {
        const key = typeof sort === 'function' ? sort(cur) : cur[sort]

        if (!acc[key]) {
            acc[key] = []
        }

        acc[key].push(cur)
        return acc
    }, {})
}

console.log(groupBy([6.1, 4.2, 6.3], Math.floor)); // -> { '4': [4.2], '6': [6.1, 6.3] }
console.log(groupBy(['one', 'two', 'three'], 'length')); // -> { '3': ['one', 'two'], '5': ['three'] }