// Write your function here
function getElementsLessThan100AtProperty(){
    let miObj = [];
    
    if (Array.isArray(obj.key)){
        miObj =  obj.key.filter((elemento, x)=>{ if(elemento < 100) return true;
                                               }
                               );
    }
    return miObj;
}


let obj = {
    key: [1000, 20, 50, 500]
  };
  let output = getElementsLessThan100AtProperty(obj, 'key');
  console.log(output); // --> [20, 50]

obj = {
    key: []
  };
  output = getElementsLessThan100AtProperty(obj, 'key');
  console.log("Vacio: ", output); // --> [10, 10]

obj = {
    key: [1000, 220, 520, 500]
  };
  output = getElementsLessThan100AtProperty(obj, 'key');
  console.log("< 100: ", output); // --> [10, 10]

obj = {
    key: 10
  };
  output = getElementsLessThan100AtProperty(obj, 'key');
  console.log("No es array: ", output); // --> [10, 10]

obj = {
    keys: [1000, 20, 50, 500]
  };
  output = getElementsLessThan100AtProperty(obj, 'key');
  console.log("Keys: ", output); // --> [10, 10]
