function flatten(array) {
	const result = [];

	for (let item of array) {
		console.log('item', item)
		if (Array.isArray(item)) {
			const res = flatten(item)
			for (let elem of res) {
				result.push(elem)
			}
		} else {
			result.push(item)
		}
	}
	return result;
}

console.log(flatten([[1], [[2, 3]], [[[4]]]])) // -> [1, 2, 3, 4]