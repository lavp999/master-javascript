function addToFront(arr, element) {
  // your code here
  let lon = arr.unshift(element)
  return arr;
}

let output = addToFront([1, 2], 3);
console.log(output); // -> [3, 1, 2]

//Hint: you can use unshift