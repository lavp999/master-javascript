// Write your function here
function getElementsGreaterThan10AtProperty(){
    let miObj = [];
    
    if (Array.isArray(obj.key)){
        miObj =  obj.key.filter((elemento, x)=>{ if(elemento > 10) return true;
                                               }
                               );
    }
    return miObj;
}


let obj = {
    key: [1, 20, 30]
  };

let output = getElementsGreaterThan10AtProperty(obj, 'key');
console.log(output); // --> [20, 30]

obj = {
    key: []
  };
  output = getElementsGreaterThan10AtProperty(obj, 'key');
  console.log("Vacio: ", output); // --> [10, 10]

obj = {
    key: [1, 2, 4, 5]
  };
  output = getElementsGreaterThan10AtProperty(obj, 'key');
  console.log("> 10: ", output); // --> [10, 10]

obj = {
    key: 10
  };
  output = getElementsGreaterThan10AtProperty(obj, 'key');
  console.log("No es array: ", output); // --> [10, 10]

obj = {
    keys: [1000, 20, 50, 500]
  };
  output = getElementsGreaterThan10AtProperty(obj, 'key');
  console.log("Keys: ", output); // --> [10, 10]