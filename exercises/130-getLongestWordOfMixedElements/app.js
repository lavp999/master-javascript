function getLongestWordOfMixedElements(arr) {
    // your code here
    let masLargo = "rr";
    let long = 0;

    arr.forEach(e => {
        if(long < e.length){
                long = e.length;
                masLargo = e;
        }
    });

    return masLargo;
}

let output = getLongestWordOfMixedElements([3, 'word', 5, 'up', 3, 1]);
console.log(output); // --> 'word'