// Write your function here
function removeElement(arr, valor){

    return arr.filter(elemento => (elemento != valor));

}

let output = removeElement([1, 2, 3, 2, 1], 2);
console.log(output); // --> [1, 3, 1]