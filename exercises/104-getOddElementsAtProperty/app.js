let obj = {
  key: [1, 2, 3, 4, 5]
};

function getOddElementsAtProperty(obj, key) {
    return obj.key.filter((elemento)=>{
      return (elemento % 2 != 0);
    });
}

let output = getOddElementsAtProperty(obj, 'key');
console.log(output); // --> [1, 3, 5]