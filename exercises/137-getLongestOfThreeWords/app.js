function getLongestOfThreeWords(word1, word2, word3) {
    // your code here
    let arr = [word1, word2, word3];
    let miPalabra = ""
    let longMax = 0;

    arr.forEach(elemento => {
        if(elemento.length > longMax) {
            longMax = elemento.length;
            miPalabra = elemento;
        }
    });


    return miPalabra;
}

let output = getLongestOfThreeWords('these', 'three', 'words');
console.log(output); // --> 'these'