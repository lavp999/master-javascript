function flipPairs(input){
    // your code here
    let miCadena = "";
    let x = 1;

        for(; x<input.length; x+= 2){
            miCadena += input[x] + input[x-1]
        }
        if (x>=input.length) miCadena += input[input.length-1];

    return miCadena;
}

let input = 'check out how interesting this problem is, it\'s insanely interesting!';
let output = flipPairs(input);
console.log(output); // --> hcce kuo toh wnietertsni ghtsip orlbmei ,si 't sniasenyli tnreseitgn!

input = 'heck out how interesting this problem is, it\'s insanely interesting!';
output = flipPairs(input);
console.log(output); // --> es par, pero debe sacar el simbolo "!"
