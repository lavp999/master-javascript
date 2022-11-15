function repeatString(string, num) {
    // your code here
    let miCadena ="";
    
    for(x=1; x<=num; x++) miCadena += string;

    return miCadena;
}

let output = repeatString('code', 3);
console.log(output); // --> 'codecodecode'