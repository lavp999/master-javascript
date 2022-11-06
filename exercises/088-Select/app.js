// Write your function here
function select(arr, obj){
  let miObj = [];

  for(elemento in obj){
    arr.forEach(valorArray => {
      console.log(elemento , valorArray);
      if (elemento == valorArray) miObj[valorArray] = obj[elemento];
    });
  }

  return miObj;
}

let arr = ['a', 'c', 'e'];
let obj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4
};
let output = select(arr, obj);
console.log(output); // --> { a: 1, c: 3 }