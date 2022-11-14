function findSmallestNumberAmongMixedElements(arr) {
  // your code here
  let masBajo = 99999;

  arr.forEach(e => {
      if(masBajo > e){
              masBajo = e;
      }
  });

  return masBajo;
}

let output = findSmallestNumberAmongMixedElements([4, 'lincoln', 9, 'octopus']);
console.log(output); // --> 4