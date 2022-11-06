function getAverageOfElementsAtProperty(obj, key) {
  // your code here
  let suma = 0;
  let arr = obj.key;

  arr.forEach(elemento => {
      suma += elemento 
  });


  return suma/arr.length;
}



let obj = {
  key: [1, 2, 3]
};
let output = getAverageOfElementsAtProperty(obj, 'key');
console.log(output); // --> 2  