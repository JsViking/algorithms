function selectionSort(array) {
    for (let i = 0; i < array.length; i++) {
        let minElement = i
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[minElement]) {
                minElement = j
            }
        }
        let tmp = array[i];
        array[i] = array[minElement];
        array[minElement] = tmp;
    }
    return array;
}

const NotSortedArray = [3,4,6,2,7,8,4,5,7,9,4,6,3,65,8,54,3]

console.log(selectionSort(NotSortedArray))