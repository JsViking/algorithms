function binarySearch(array, item) {
    let head = 0;
    let tail = array.length;
    let middle;
    let position = -1;

    while(position < 0 && head <= tail) {
        middle = Math.floor((head + tail) / 2)
        if (array[middle] === item) {
            position = middle
        }

        if (item < array[middle]) {
            tail = middle - 1
        } else {
            head = middle + 1
        }
    }

    return position;
}

function binarySearchRecursion(array, item, start = 0, end) {
    let tail = end || array.length;
    let middle = Math.floor((start + tail) / 2);
    if (array[middle] === item)  {
        return middle
    };

    if (item < array[middle]) {
        return binarySearchRecursion(array, item, start, middle - 1)
    } else {
        return binarySearchRecursion(array, item, middle + 1, array.length)
    }
}

const sortArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18];

console.log(binarySearch(sortArray, 6))
console.log(binarySearchRecursion(sortArray, 8))