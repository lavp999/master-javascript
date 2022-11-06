// Write your function here
function getNthElementOfProperty(obj, key, pos){
    return obj.key[pos];
}

let obj = {
    key: [1, 2, 6]
  };
  let output = getNthElementOfProperty(obj, 'key', 1);
  console.log(output); // --> 2