function convertObjectToList(obj) {
  // your code here
    // your code here
    let miArr = [];
    let miArrContenedor = []

    for (const propiedad in obj) {
      miArr = [];
      miArr.push(propiedad);
      miArr.push(obj[propiedad]);
      miArrContenedor.push(miArr);
    }
    return miArrContenedor;
}


let output = convertObjectToList({name: "Holly", age: 35, role: "producer"});
console.log(output); // [['name', 'Holly'], ['age', 35], ['role', 'producer']]