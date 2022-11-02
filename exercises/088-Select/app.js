// Write your function here
function select(arr, obj){
  let miObj = arr.filter(valorArray => {
    for(elemento in obj){
      console.log(elemento , valorArray);
      if (elemento == valorArray) return true;
      else                        return false;
    }
  });
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