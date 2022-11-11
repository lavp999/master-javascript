function computeProductOfAllElements(arr) {
  // your code here
  let producto = 1;
  for(x=0; x<arr.length; x++){
    producto = producto * arr[x];
  }
  return producto;
}

let output = computeProductOfAllElements([2, 5, 6]);
console.log(output); // --> 60

