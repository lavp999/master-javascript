function computeSummationToN(n) {
  // your code here
  let suma = 0;

  for(x=1; x<=n; x++) suma += x;
  
  return suma;

}

let output = computeSummationToN(6);
console.log(output); // --> 21

