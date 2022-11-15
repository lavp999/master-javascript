function modulo(num1, num2) {
    // your code here
    let resto = 0;

    if (num1 === 0){
        resto =  0;
    }else
        if (num2 === 0 || num1 === NaN || num2 === NaN) {
            resto =  NaN;
        }else{
            division = Math.floor((num1 / num2));
            resto = num1 - (num2 * division);
            resto = (num1 < 0 ? resto*-1 : resto);
        }

    return resto;
}

let output = modulo(25, 4);
console.log(output); // --> 1

output = modulo(0, 4);
console.log(output); // --> 0

output = modulo(25, 0);
console.log(output); // --> NaN

output = modulo(25, NaN);
console.log(output); // --> NaN

output = modulo(NaN, 4);
console.log(output); // --> NaN