function bubbleSort(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (array[j] > array[j + 1]) {
                let tmp = array[j + 1]
                array[j + 1] = array[j]
                array[j] = tmp
            }
        }
    }
    return array;
}

const NotSortedArray = [3,4,6,2,7,8,4,5,7,9,4,6,3,65,8,54,3]

console.log(bubbleSort(NotSortedArray))