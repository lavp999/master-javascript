function computeSumOfAllElements(arr) {
  // your code here
  let suma = 0;
  
  arr.forEach(e => suma += e);

  return suma;
}

let output = computeSumOfAllElements([1, 2, 3])
console.log(output); // --> 6