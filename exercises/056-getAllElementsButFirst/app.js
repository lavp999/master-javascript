function getAllElementsButFirst(array) {
  // your code here
  let newArray = [];
  for(let x = 1; x < array.length; x++){
     newArray.push(array[x]); 
  }
  
  return newArray;
}
let input = [1, 2, 3, 4];
let output = getAllElementsButFirst(input);
console.log(output); // --> [2, 3, 4]