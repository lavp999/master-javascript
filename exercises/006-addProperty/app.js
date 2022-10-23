function addProperty(obj, key) {
  // your code here
  
  obj[key] = true;

    return obj;

}

let myObj = {};
addProperty(myObj, 'myProperty1');
addProperty(myObj, 'myProperty2');
addProperty(myObj, 'myProperty3');
addProperty(myObj, 'myProperty4');
addProperty(myObj, 'myProperty5');
addProperty(myObj, 'myProperty6');
console.log(myObj); // --> true