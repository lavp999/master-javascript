function removeEvenValues(obj) {
    // your code here
    for(const elemento in obj){
        if (obj[elemento] % 2 == 0){
            delete obj[elemento];
        }
    }
}

let obj = {
    a: 2,
    b: 3,
    c: 4
  };
  removeEvenValues(obj);
  console.log(obj); // --> { b: 3 }