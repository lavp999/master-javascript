function getElementsUpTo(array, n) {
  // your code here
  let newArray = [];
  for(let x = 0; x < n; x++){
     newArray.push(array[x]); 
  }
  
  return newArray;
}

let output = getElementsUpTo(['a', 'b', 'c', 'd', 'e'], 3) 
console.log(output); // --> ['a', 'b', 'c']