function findPairForSum(array, number){
  let miArr = [];

    for(x=0; x<array.length;x++){
        for(y=0; y<array.length;y++){
            if (x!=y)
                if (number == (array[x] + array[y])){
                    miArr.push(array[x]);
                    miArr.push(array[y]); 
                    return miArr;  // maaal while
                }
            }
    }
    return miArr;
}

let pair = findPairForSum([3, 34, 4, 12, 5, 2], 9);
console.log(pair); // --> [4, 5]