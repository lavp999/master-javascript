function isRotated(str1, str2) {
    // your code here
    // no se si lo he entendido muy bien
    let aux = str2;

    if (str1.length === str2.length)
        for(x=0; x<str2.length;x++){
            aux = aux.substr(1, aux.length-1)+aux[0];
            if(str1 === aux) return true;
        }
                
    return false;

}

console.log(isRotated('hello world', 'orldhello w')) // => true
console.log(isRotated('hello world', 'omrel wp')) // => false