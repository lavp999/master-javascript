function getLargestNumberAmongMixedElements(arr) {
    // your code here
    let masLargo = 0;

    arr.forEach(e => {
        if(masLargo < e){
                masLargo = e;
        }
    });

    return masLargo;
}

let output = getLargestNumberAmongMixedElements([3, 'word', 5, 'up', 3, 1]);
console.log(output); // --> 5