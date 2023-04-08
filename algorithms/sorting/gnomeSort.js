const gnomeSort = arr => {
    const l = arr.length;
    let i = 1;
    while (i < l) {
        if (i > 0 && arr[i - 1] > arr[i]) {
            [arr[i], arr[i - 1]] = [arr[i - 1], arr[i]];
            i--;
        } else {
            i++;
        }
    }
    return arr;
};
