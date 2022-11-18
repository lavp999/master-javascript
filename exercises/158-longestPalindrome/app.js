function findLongestPalindrome(sentence) {
  // split sentence into words
  // iterate words and collect the palindromes
  // sort the list of palindromes by word length
  // return the largest item in the sorted list
    let miFrase = sentence.toLowerCase();
    let arrPalabras = [];
    let longPalabras;// = 3;
    let maxFor; // = miFrase.length-longPalabras;
    let palabraMax = 0;

      for (longPalabras=3; longPalabras<=miFrase.length;longPalabras++){
        maxFor = miFrase.length-longPalabras+1;
        for(x=0; x < maxFor; x++)
            if (isPalindrome(miFrase.substr(x,longPalabras)))
                arrPalabras.push(miFrase.substr(x,longPalabras));
      }

      arrPalabras.forEach((elemento, index) => {
        if(elemento.length >= arrPalabras[palabraMax].length) palabraMax = index;
      });

      // console.log(arrPalabras);

    return arrPalabras[palabraMax];
}

function reverseString(string) {
  let arrStr = string.split("");
  let cadena = arrStr.reverse().join("");

  return cadena;
}
  
function isPalindrome(word) {
  // hint: you can detect palindromes by comparing a string to its reverse
  return (word === reverseString(word));
}

let output = findLongestPalindrome("My dad is a racecar athlete");
console.log(output);

