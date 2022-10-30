function getElementsAfter(array, n) {
  // your code here
  let newArray = [];
  for(let x = n+1; x < array.length; x++){
     newArray.push(array[x]); 
  }
  
  return newArray;
}


let output = getElementsAfter(['a', 'b', 'c', 'd', 'e'], 2); 
console.log(output); // --> ['d', 'e']