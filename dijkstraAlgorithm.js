function dijkstraAlgorithm(graph) {
    let costs = {};
    let parens = {};
    const processed = [];
    let node = null;
    Object.keys(graph).forEach((key, index) => {
        if (index === 0) {
            costs = {...graph[key]} 
            Object.keys(graph[key]).forEach((k) => {
                parens[k] = key
            })
        } else if (!costs[key]) {
            costs[key] = Infinity
            parens[key] = null
        }
    })
    node = findLowerCost(costs, processed)
    while (node) {
        const cost = costs[node];
        const neighbors = graph[node];
        Object.keys(neighbors).forEach((key) => {
            const newCost = cost + neighbors[key];
            if (costs[key] > newCost) {
                costs[key] = newCost
                parens[key] = node
            };
        });
        processed.push(node)
        node = findLowerCost(costs, processed)
    }
    console.log('costs', costs)
    console.log('parens', parens)
}

function findLowerCost(costs, processed) {
    let lessCost = Infinity;
    let lessCostNode = null;
    Object.keys(costs).forEach((node) => {
        const cost = costs[node];
        if (lessCost > cost && !processed.includes(node)) {
            lessCost = cost
            lessCostNode = node
        }
    })
    return lessCostNode
}

const graph = {
    start: {a: 5, b: 2},
    a: {d: 4, c: 2},
    b: {c: 7},
    c: {fin: 1},
    d: {c: 6, fin: 3},
    fin: {},
}

dijkstraAlgorithm(graph)