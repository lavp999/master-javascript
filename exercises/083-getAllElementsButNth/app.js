function getAllElementsButNth(array, n) {
    // Write your function here
    let miArr = array.slice(0, n);

    return miArr.concat(array.slice(n+1));
}
let output = getAllElementsButNth(['a', 'b', 'c'], 1);
console.log(output); // --> ['a', 'c']