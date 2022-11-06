// Write your function here
function countAllCharacters(cadena){
let miObj = {};

    for(x = 0; x < cadena.length; x++){
        console.log(cadena[x]);
        if( miObj[cadena[x]] == undefined ){
            miObj[cadena[x]] = 1;
        }else{
            miObj[cadena[x]] += 1;
        }
    }
    return miObj;
}




let output = countAllCharacters('banana');
console.log(output); // --> {b: 1, a: 3, n: 2}