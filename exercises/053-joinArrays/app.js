function joinArrays(arr1, arr2) {
  // your code here
  arr2.forEach((element) => {
    arr1.push(element);
  });
  
  return arr1;
}

let output = joinArrays([1, 2], [3, 4]);
console.log(output); // --> [1, 2, 3, 4]