function flipPairs(input){
    // your code here
    let miCadena = "";
    let x = 1;

        for(; x<input.length; x+= 2){
            miCadena += input[x] + input[x-1]
        }
        
        if(miCadena.length != input.length) miCadena += input[input.length-1];

    return miCadena;
}
        
console.log("-----------------------------------------------------------------------------");
let input = "check out how interesting this problem is, it\'s insanely interesting!";
let output = flipPairs(input);
console.log('res: ', output, (output == "hcce kuo toh wnietertsni ghtsip orlbmei ,si 't sniasenyli tnreseitgn!" ? "Ok" : "KO"));

input = 'heck out how interesting this problem is, it\'s insanely interesting!';
output = flipPairs(input);
console.log('res: ', output, " --> es par, pero debe sacar el simbolo '!'");
console.log("-----------------------------------------------------------------------------");
