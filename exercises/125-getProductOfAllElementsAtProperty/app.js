let obj = {
  key: [1, 2, 3, 4]
};

function getProductOfAllElementsAtProperty(obj, key) {
    // your code here
    let producto = 1;
    obj[key].forEach(e => producto *= e);
    return producto;
}
let output = getProductOfAllElementsAtProperty(obj, 'key');
console.log(output); // --> 24