const uniqQuichSort = (array) => {
    if (array.length <= 1) {
        return array
    }

    const pivatIndex = Math.floor(array.length / 2)
    const pivat = array[pivatIndex]
    const less = []
    const greater = []

    for (let i = 0; i < array.length; i++) {
        // за счет этой проверки создается уникальный массив
        // if (pivat === array[i]) continue
        if (i === pivatIndex) continue
        if (array[i] < pivat) {
            less.push(array[i])
        } else {
            greater.push(array[i])
        }
    }

    return [...uniqQuichSort(less), pivat, ...uniqQuichSort(greater)]
}

const NotSortedArray = [3,4,6,2,7,8,4,5,7,9,4,6,3,65,8,54,3]

console.log(uniqQuichSort(NotSortedArray))