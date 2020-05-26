function map(array, func){
    let mappedArray = [];
    array.forEach(index => {
        mappedArray.push(func(index))
    });
    return mappedArray;
}