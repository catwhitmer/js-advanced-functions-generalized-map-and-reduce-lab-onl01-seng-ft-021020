function map(array, fn){
    let newArray = [];
    array.forEach(index => {
        newArray.push(fn(index))
    });
    return newArray;
}