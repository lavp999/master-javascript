let obj = {
  key: [2, 1, 5]
};
function getSmallestElementAtProperty(obj, key) {
    // your code here
    let masCorto = 1000; // si no sabemos esto, poner un && en la condición
    obj[key].forEach(elemento => {
        if(masCorto > elemento) masCorto = elemento;
    });
    return masCorto;
}
let output = getSmallestElementAtProperty(obj, 'key');
console.log(output); // --> 1