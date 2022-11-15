function findShortestOfThreeWords(word1, word2, word3) {
    // your code here
    let arr = [word1, word2, word3];
    let miPalabra = ""
    let longMin = 9999;

    arr.forEach(elemento => {
        if(elemento.length < longMin) {
            longMin = elemento.length;
            miPalabra = elemento;
        }
    });


    return miPalabra;
}

let output = findShortestOfThreeWords('a', 'two', 'three');
console.log(output); // --> 'a'