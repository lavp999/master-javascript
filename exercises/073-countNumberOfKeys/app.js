function countNumberOfKeys(obj) {
    // your code here
    let contador = 0;
    for(const elemento in obj)
            contador++;
    return contador;

}

let obj = {
    a: 1,
    b: 2,
    c: 3
  };
  let output = countNumberOfKeys(obj);
  console.log(output); // --> 3