// Write your function here
function isEvenAndGreaterThanTen(n){
    return ((n > 10) && (n%2 ==0));
}

let output = isEvenAndGreaterThanTen(12);
console.log(output); // --> false