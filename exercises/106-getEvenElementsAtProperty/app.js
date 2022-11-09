
let obj = {
  key: [1000, 11, 50, 17]
};

function getEvenElementsAtProperty(obj, key) {
    // your code here
    return obj[key].filter((elemento)=>{
      return (elemento%2 == 0);
  });
}
let output = getEvenElementsAtProperty(obj, 'key');
console.log(output); // --> [1000, 50]