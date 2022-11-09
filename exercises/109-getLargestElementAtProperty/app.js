let obj = {
  key: [1, 2, 4]
};
function getLargestElementAtProperty(obj, key) {
    // your code here
    let masGrande = 0;

    obj[key].forEach(elemento => {
      if (masGrande < elemento) masGrande = elemento;
    });

    return masGrande;
}
let output = getLargestElementAtProperty(obj, 'key');
console.log(output); // --> 4