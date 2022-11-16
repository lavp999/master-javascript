function listAllValues(obj) {
  // your code here
  let miArr = [];

  for (const propiedad in obj) {
    miArr.push(obj[propiedad]);
  }
  return miArr;
}


let output = listAllValues({name: "Krysten", age: 33, hasPets: false});
console.log(output); // ['Krysten', 33, false]