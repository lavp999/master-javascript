// Write your function here
function getOddLengthWordsAtProperty(obj, key){
  const miArr = obj.key;

  return miArr.filter(elemento => (elemento.length%2 != 0));
}


let obj = {
    key: ['It', 'has', 'some', 'words']
  };
  let output = getOddLengthWordsAtProperty(obj, 'key');
  console.log(output); // --> ['has', 'words']