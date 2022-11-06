// Write your function here
function getElementsThatEqual10AtProperty(obj, key){

    let miObj = [];
    
    if (Array.isArray(obj.key)){
        miObj =  obj.key.filter((elemento, x)=>{ if(elemento == 10) return true;
                                               }
                               );
    }
    return miObj;
}

let obj = {
    key: [1000, 10, 50, 10]
  };
  let output = getElementsThatEqual10AtProperty(obj, 'key');
  console.log("Ejercicio:", output); // --> [10, 10]

  obj = {
    key: []
  };
  output = getElementsThatEqual10AtProperty(obj, 'key');
  console.log("Vacio: ", output); // --> [10, 10]

  obj = {
    key: [1,2,3,4,5,6,7,8,9,0]
  };
  output = getElementsThatEqual10AtProperty(obj, 'key');
  console.log("Sin 10: ", output); // --> [10, 10]

  obj = {
    key: 10
  };
  output = getElementsThatEqual10AtProperty(obj, 'key');
  console.log("No es array: ", output); // --> [10, 10]

  obj = {
    keys: [1,2,3,4,5,6,7,8,9,0]
  };
  output = getElementsThatEqual10AtProperty(obj, 'key');
  console.log("Keys: ", output); // --> [10, 10]
