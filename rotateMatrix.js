const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

function rotate(source) {
    const newMatrix = matrix[0].map(_ => []);
    for (let i = 0; i < newMatrix.length; i++) {
        for (let j = 0; j < source[0].length; j++) {
            newMatrix[j][newMatrix.length - 1 - i] = source[i][j];
        }
    }
    return newMatrix;
}

console.log(rotate(matrix))