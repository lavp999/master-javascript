function removeOddValues(obj) {
    // your code here
    for(elemento in obj){
        if(obj[elemento] % 2 != 0)
            delete obj[elemento];
    }
}

let obj = {
    a: 2,
    b: 3,
    c: 4
  };
  removeOddValues(obj);
  console.log(obj); // --> { a: 2, c: 4 }