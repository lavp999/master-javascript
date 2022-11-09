function filterOddLengthWords(words) {
    // your code here
    // mas críptico
  
    return words.filter((elemento)=>{
        return (elemento.length%2!=0)});
}

let output = filterOddLengthWords(['there', 'it', 'is', 'now']);
console.log(output); // --> ['there', "now']