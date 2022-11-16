function isIsogram(text) {
  // add each char to a set
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
  // note: a set drops dup values
  // thus, to see if all the chars were unique,
  // check length of text and the size of the set 
  let miSet = new Set(text.toLowerCase());
  
    return (miSet.size == text.length);

}

console.log(isIsogram("Camile")) // => true
console.log(isIsogram("Camille")) // => false