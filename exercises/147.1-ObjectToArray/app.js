function getAllKeys(obj) {
  // your code here
  let miArr = [];

  for (const propiedad in obj) {
    miArr.push(propiedad);
  }
  return miArr;
}

let output = getAllKeys({name: "Sam", age: 25, hasPets: true});
console.log(output); // ['name', 'age', 'hasPets']