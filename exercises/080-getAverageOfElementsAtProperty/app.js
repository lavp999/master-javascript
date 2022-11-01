// Write your function here
function getAverageOfElementsAtProperty(obj, clave){
    let miArr = obj[clave];
    let suma = 0;
    miArr.forEach(elemento => {
        suma += elemento;
    });

    return (suma / miArr.length);
}


let obj = {
    key: [1, 2, 3]
  };
  let output = getAverageOfElementsAtProperty(obj, 'key');
  console.log(output); // --> 2