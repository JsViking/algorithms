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
    let path = [];
    queue.push(start);

    while(queue.length > 0) {
        const current = queue.shift();
        path.push(current)
        if (!graph[current]) graph[current] = []
        
        if (graph[current].includes(end)) {
            path.push(end)
            return path;
        } else {
            queue = [...queue, ...graph[current]]
        }
    }

    return false
}

console.log(breadthSearch(graph, 'a', 'g'))