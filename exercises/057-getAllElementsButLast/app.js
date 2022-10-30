function getAllElementsButLast(array) {
    // your code here
    let newArray = [];
    for(let x = 0; x < array.length-1; x++){
       newArray.push(array[x]); 
    }
    
    return newArray;
}

let input = [1, 2, 3, 4];
let output = getAllElementsButLast(input);
console.log(output); // --> [1, 2 , 3]