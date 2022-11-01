function removeStringValuesLongerThan(num, obj) {
  // your code here
  for(const elemento in obj){
    if (obj[elemento].length > num){
        delete obj[elemento];
    }
}
  return obj;
}

let obj = {
  name: 'Montana',
  age: 20,
  location: 'Texas'
};
removeStringValuesLongerThan(6, obj);
console.log(obj); // { age: 20, location: 'Texas' }
