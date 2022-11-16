function transformFirstAndLast(array) {
  // your code here
  let miObj = new Object();
  miObj[array[0]] = array[array.length-1];

  return miObj;
}

let output = transformFirstAndLast(['Queen', 'Elizabeth', 'Of Hearts', 'Beyonce'])
console.log(output); // { Queen: "Beyonce" }

output = transformFirstAndLast(['Kevin', 'Bacon', 'Love', 'Hart', 'Costner', 'Spacey'])
console.log(output); // { Kevin: "Spacey" }