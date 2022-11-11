function findSmallestElement(arr) {
    // your code here
    let menor = 9999999;

    arr.forEach(elemento => {
        if (menor > elemento) {
            menor = elemento;
        }
    });
    return menor;

}

let output = findSmallestElement([4, 1, 9, 10]);
console.log(output); // --> 1