const graph = {
    a: ['b', 'c'],
    b: ['f'],
    c: ['d', 'e'],
    d: ['f'],
    e: ['f'],
    f: ['g'],
}

function breadthSearch(graph, start, end) {
    let queue = [];
    const checked = []
    queue.push(start);

    while(queue.length > 0) {
        const current = queue.shift();
        if (!graph[current]) graph[current] = []
        if (checked.includes[current]) continue;
        if (graph[current].includes(end)) {
            return true;
        } else {
            queue = [...queue, ...graph[current]]
            checked.push(current)
        }
    }

    return false
}

console.log(breadthSearch(graph, 'a', 'h'))