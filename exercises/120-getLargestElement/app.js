function getLargestElement(arr) {
  // your code here
  let mayor = 0;
  arr.forEach(elemento => {
    if(mayor < elemento) mayor = elemento;
  });
  return mayor;
}

let output = getLargestElement([5, 2, 8, 3]);
console.log(output); // --> 8;