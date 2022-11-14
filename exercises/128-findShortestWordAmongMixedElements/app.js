function findShortestWordAmongMixedElements(arr) {
    // your code here
    let masCorto = "rr";
    let long = 9999;

    arr.forEach(e => {
        if(long > e.length){
                long = e.length;
                masCorto = e;
        }
    });

    return masCorto;
}
let output = findShortestWordAmongMixedElements([4, 'two', 2, 'three']);
console.log(output); // --> 'two'