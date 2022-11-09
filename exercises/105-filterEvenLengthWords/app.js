function filterEvenLengthWords(words) {
    // your code here
    return words.filter((elemento)=>{
        return (elemento.length%2 == 0);
    });
}

let output = filterEvenLengthWords(['word', 'horse', 'car', 'computer']);
console.log(output); // --> ['word', 'word']