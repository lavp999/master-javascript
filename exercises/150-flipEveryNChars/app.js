function flipEveryNChars(input, n) {
    // your code here
    let miCadena = "";
    let x = n-1;
    let y = 0;

        for(; x<input.length; x+= n){
            for(z=x; z>(x-n); z--)
                miCadena += input[z];
        }
        // console.log(miCadena);
        if (x>input.length && miCadena.length != input.length){
            x = input.length-1;
            y = miCadena.length-1;
            for(z=x; z > y; z--)
                miCadena += input[z];
        }

    return miCadena;
}

console.log('-------------------------------------------------------------------------------------'); // 
let input = 'a short example';
let output = flipEveryNChars(input, 5);
console.log('res: ', output, (output == 'ohs axe trelpma' ? "Ok" : "KO"));

input = 'a short example321';
output = flipEveryNChars(input, 5);
console.log('res: ', output, (output == 'ohs axe trelpma123' ? "Ok" : "KO"));

input = "check out how interesting this problem is, it's insanely interesting!";
output = flipEveryNChars(input, 2);
console.log('res: ', output, (output == "hcce kuo toh wnietertsni ghtsip orlbmei ,si 't sniasenyli tnreseitgn!" ? "Ok" : "KO"));


input = 'heck out how interesting this problem is, it\'s insanely interesting!';
output = flipEveryNChars(input, 2);
console.log('res: ', output, (output == "ehkco tuh woi tnreseitgnt ih srpboel msi ,tis'i snnale ynietertsni!g" ? "Ok" : "KO"));
console.log('-------------------------------------------------------------------------------------'); // 
