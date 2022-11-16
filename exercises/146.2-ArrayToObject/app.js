function fromListToObject(array) {
  // your code here
  let miObj = new Object();
    array.forEach(elemento => {
      miObj[elemento[0]] = elemento[1];
    });
  
  return miObj;
}

let output = fromListToObject([['make', 'Ford'], ['model', 'Mustang'], ['year', 1964]])
console.log(output) // => { make: 'Ford', model: 'Mustang', year: 1964 }