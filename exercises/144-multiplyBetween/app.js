function multiplyBetween(num1, num2) {
    // Your code here
    let producto = (num1>=num2 ? 0 : 1);
    for(x=num1; x < num2; x++) producto *= x;

    return producto;

}

let output = multiplyBetween(2, 5);
console.log(output); // --> 24

output = multiplyBetween(5, 2);
console.log(output); // --> 0