function getLengthOfLongestElement(arr) {
    // Your code here
    let masLargo = 0;
    arr.forEach(elemento => {
        if(masLargo < elemento.length) masLargo = elemento.length;
    });
    return masLargo;
}

let output = getLengthOfLongestElement(['one', 'two', 'three']);
console.log(output); // --> 5