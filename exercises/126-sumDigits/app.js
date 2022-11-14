function sumDigits(num) {
    // your code here
    let suma = 0;
    let numero = 0;
    let resta = false;


    for (x=0; x < num.toString().length; x++)
            if(x == 0 && num.toString()[x] == "-"){
                resta = true;
            }else{
                numero =  parseInt(num.toString()[x], 10);
                if (resta){
                    suma -= numero;
                    resta = false;
                }else{
                    suma += numero;
                }
            }
    return suma;

}

let output = sumDigits(1148);
console.log("14?", (output === 14 ?"Si" : "No: "+  + output)); // --> 14

    output = sumDigits(-316);
console.log("4?", (output === 4 ?"Si" : "No:" + output)); // --> 4
