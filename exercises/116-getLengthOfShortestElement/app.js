function getLengthOfShortestElement(arr) {
    // your code here
    let menor = 99;
    arr.forEach(c => {
        if(menor > c.length) menor = c.length;
    });
    return menor;
}
let output = getLengthOfShortestElement(['one', 'two', 'three']);
console.log(output); // --> 3