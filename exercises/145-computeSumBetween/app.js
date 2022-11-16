function computeSumBetween(num1, num2) {
    // Your code here
    let suma = 0;
    for(x=num1; x < num2; x++) suma += x;

    return suma;

}

let output = computeSumBetween(2, 5);
console.log(output); // --> 9