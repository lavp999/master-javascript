function getLongestElement(arr) {
    // your code here
    let mayor = 0;
    let palabra ="";
    arr.forEach(c => {
        if(mayor < c.length) palabra = c;
    });
    return palabra;
}
let output = getLongestElement(['one', 'two', 'three']);
console.log(output); // --> 'three'