// Write your function here
function keep(arr, valor){

return arr.filter(elemento => (elemento == valor));

}

let output = keep([1, 2, 3, 2, 1], 2);
console.log(output); // --> [2, 2]