// Write your function here !
function computeAverageOfNumbers(arr){
    let suma = 0;

    arr.forEach(elemento => {
        suma += elemento 
    });


    return suma/arr.length;
}

let input = [1,2,3,4,5];
let output = computeAverageOfNumbers(input);
console.log(output); // --> 3