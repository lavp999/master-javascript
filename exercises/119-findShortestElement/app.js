function findShortestElement(arr) {
    // your code here
    let menor = "eeeeeeeeeeeeeee";

    arr.forEach(elemento => {
        if(menor.length > elemento.length){
            menor = elemento;
        }
    });
    return menor;
}

let output = findShortestElement(['a', 'two', 'three']);
console.log(output); // --> 'a'