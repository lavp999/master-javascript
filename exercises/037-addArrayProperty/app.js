function addArrayProperty(obj, key, arr) {
  // Add your code after this line
  return (obj[key] = arr);
}

let myObj = {};
let myArray = [1, 3];
addArrayProperty(myObj, 'myProperty', myArray);
console.log(myObj.myProperty); // --> [1, 3]