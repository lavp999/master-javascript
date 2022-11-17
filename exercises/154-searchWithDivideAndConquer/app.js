function search(array, value) {
  let posicion = -1;
  let existe = false;
  let medio;
  let primero = 0;                 //por la izquierda
  let ultimo = array.length - 1;   //por la derecha
 
    while (existe === false && primero <= ultimo) {
        medio = Math.floor((primero + ultimo)/2);

        if (array[medio] == value) {    existe = true;
                                        posicion = medio;
        }else if (array[medio] > value) ultimo  = medio - 1;
        else                            primero = medio + 1;
    }
    return posicion;
}

let arr = [1, 3, 16, 22, 31, 33, 34]
console.log(search(arr, 31)); // => 4