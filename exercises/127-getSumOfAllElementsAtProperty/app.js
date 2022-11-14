let obj = {
    key: [4, 1, 8]
};

function getSumOfAllElementsAtProperty(obj, key) {
    // your code here
    let suma = 0;

    for(x=0; x < obj[key].length; x++) suma += obj[key][x];

    return suma;
}
let output = getSumOfAllElementsAtProperty(obj, 'key');
console.log(output); // --> 13