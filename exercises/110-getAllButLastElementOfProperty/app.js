let obj = {
  key: [1, 2, 3]
};
function getAllButLastElementOfProperty(obj, key) {
    // your code here
    let miArr = obj[key].slice();
      miArr.pop();

    return miArr;
}

let output = getAllButLastElementOfProperty(obj, 'key');
console.log(output); // --> [1,2]