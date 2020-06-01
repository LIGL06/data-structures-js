const items = [5,8,1,3,7,9,2];

function swap(items, leftIndex, rightIndex) {
    const temp = items[leftIndex];
    items[leftIndex] = items[rightIndex];
    items[rightIndex] = temp;
}

function partition(items, leftIndex, rightIndex) {
    const pivot = items[Math.floor((rightIndex + leftIndex) / 2)];
    let i = leftIndex, j = rightIndex;
    while (i <= j) {
        while (items[i] < pivot) i++;
        while (items[j] > pivot) j--;
        if (i <= j) {
            swap(items, i, j);
            i++;
            j--;
        }
    }
    return i;
}

function quickSort(items, leftIndex, rightIndex) {
    let index;
    if (items.length > 1) {
        index = partition(items, leftIndex, rightIndex);
        if (leftIndex < index - 1) {
            quickSort(items, leftIndex, index - 1);
        }
        if (index < rightIndex) {
            quickSort(items, index, rightIndex);
        }
    }
    return items;
}


const sortedArray = quickSort(items, 0, items.length - 1);
console.log(sortedArray);