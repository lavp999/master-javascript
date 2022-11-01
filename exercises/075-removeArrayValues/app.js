function removeArrayValues(obj) {
    // your code here
    for(elemento in obj){
        if(Array.isArray(obj[elemento])){
            delete obj[elemento];
        }
    }
}

let obj = {
    a: [1, 3, 4],
    b: 2,
    c: ['hi', 'there']
  }
  removeArrayValues(obj);
  console.log(obj); // --> { b: 2 }