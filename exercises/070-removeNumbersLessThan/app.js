let obj = {
    a: 8,
    b: 2,
    c: 'montana'
}
function removeNumbersLessThan(num, obj) {
    // your code here
    for(const elemento in obj){
        if (obj[elemento] < num){
            delete obj[elemento];
        }
    }
}


removeNumbersLessThan(5, obj);
console.log(obj); // --> { a: 8, c: 'montana' }
