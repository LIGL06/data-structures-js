function insertionSort(array) {
    for (let i = 1; i < array.length; i++) {
        insert(i, array);
    }
}

function insert(n, array) {
    const toSort = array[n];
    let index = n;
    while (index > 0) {
        if (array[index - 1] < toSort) break;
        array[index] = array[index - 1];
        index--;
    }
    array[index] = toSort;
    console.log(array);
}

// Given n and arr
function insertionSort2(n, arr) {
    for (let i = 1; i < n; i++) {
        const toSort = arr[i];
        let index = i;
        while (index > 0) {
            if (arr[index - 1] < toSort) break;
            arr[index] = arr[index - 1];
            index--;
        }
        arr[index] = toSort;
        console.log(arr.join(' '));
    }
}

export default insertionSort;