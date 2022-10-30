function removeFromBackOfNew(arr) {
  // your code here
  let newArray = arr.slice();
  newArray.pop()
  return newArray;
}

let arr = [1, 2, 3];
let output = removeFromBackOfNew(arr);
console.log(output); // --> [1, 2]
console.log(arr); // --> [1, 2, 3]