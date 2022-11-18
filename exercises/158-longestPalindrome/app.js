function findLongestPalindrome(sentence) {
  // split sentence into words
  // iterate words and collect the palindromes
  // sort the list of palindromes by word length
  // return the largest item in the sorted list

   // dividir la oración en palabras
   // iterar palabras y recoger los palíndromos
   // ordenar la lista de palíndromos por longitud de palabra
   // devuelve el elemento más grande en la lista ordenada
    let miFrase = sentence.toLowerCase();
    let arrPalabras = [];
    let longPalabras = 3;
    let maxFor = miFrase.length-longPalabras;

      for(x=0; x < maxFor; x++){
        //console.log(miFrase.substr(x,x+longPalabras));
        console.log(x , x+longPalabras-1);
        arrPalabras.push(miFrase.substr(x,longPalabras));
      }

    return arrPalabras;
}

function reverseString(string) {
  let arrStr = string.split("");
  let cadena = arrStr.reverse().join("");

  let arr = [];
  for(let i of cadena) {
      arr.push(i);
  }

  return cadena;

}
  
function isPalindrome(word) {
  // hint: you can detect palindromes by comparing a string to its reverse

  return word;

}


console.log("-------------------------------------------------------------");
// let output = findLongestPalindrome("My dad is a racecar athlete");
let output = reverseString("My dad is a racecar athlete");
console.log("reverseString: ", output);

output = findLongestPalindrome(output);
console.log("findLongestPalindrome: ", output);


output = isPalindrome(output);
console.log("isPalindrome: ", output);
console.log("-------------------------------------------------------------");
console.log("");console.log("");console.log("");